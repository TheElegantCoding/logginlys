import { COLORS, DEFAULT_LOGGER } from '@src/constant/logger_constant.js';
import { isNode } from '@src/util/validation.js';

import type { LogLevelType, LoggerParameters, LoggerHttpParameters } from '@src/type/logger_type.js';

class LogManager {
  private readonly options: LoggerParameters;

  constructor (options: Partial<LoggerParameters> = {}) {
    this.options = {
      showTimestamp: true,
      isDev: true,
      prefix: '',
      ...options
    };
  }

  private formatMessage (level: LogLevelType, message: string, extras?: LoggerParameters) {
    const config = DEFAULT_LOGGER[level];
    const showTimestamp = extras?.showTimestamp ?? this.options.showTimestamp;
    const currentPrefix = extras?.prefix ?? this.options.prefix;
    const time = showTimestamp ? `${this.getTimestamp()}` : '';
    const prefix = currentPrefix ? `${currentPrefix} ` : '';
    const fullMessage = `${prefix}${message}`;

    if (isNode) {
      const messageLog = `${config.ansi}${fullMessage}${COLORS.ANSI.RESET}`;
      return [`${COLORS.ANSI.GREY}${time}${COLORS.ANSI.RESET} ${config.bgAnsi} ${config.icon} ${level} ${COLORS.ANSI.RESET} ${messageLog}`];
    }

    return [
      `%c${time}%c${config.emoji} ${config.level}%c ${fullMessage}`,
      `color: ${COLORS.CSS.GREY};`,
      `background: ${config.color}; color: white; font-weight: bold; padding: 2px 6px; border-radius: 3px;`,
      `color: ${config.color}; font-weight: bold;`
    ];
  }

  private getTimestamp () {
    return new Date().toISOString().split('T')[1]?.split('.')[0];
  }

  private run (type: LogLevelType, message: string, extras?: LoggerParameters) {
    if (!this.options.isDev) { return; }

    if (extras?.blankAbove || this.options.blankAbove) { console.log(''); }
    console.log(...this.formatMessage(type, message, extras));
    if (extras?.blankBelow || this.options.blankBelow) { console.log(''); }
  }

  blank () {
    console.log('');
  }

  error (message: string, opt?: LoggerParameters) {
    this.run('ERROR', message, opt);
  }

  http (options?: LoggerHttpParameters) {
    const url = new URL(options?.url ?? '');
    const path = url.pathname + url.search;

    this.run('HTTP', `${options?.method} ${options?.status} - ${path} (${options?.time}ms)`, options);
  }

  httpError (message: string, options?: LoggerHttpParameters) {
    const url = new URL(options?.url ?? '');
    const path = url.pathname + url.search;

    this.run('ERROR', `${options?.method} ${options?.status} - ${path} (${options?.time}ms) - ${message}`, options);
  }

  info (message: string, opt?: LoggerParameters) {
    this.run('INFO', message, opt);
  }

  log (message: string, opt?: LoggerParameters) {
    this.run('LOG', message, opt);
  }

  setup (message: string, opt?: LoggerParameters) {
    this.run('SETUP', message, opt);
  }

  success (message: string, opt?: LoggerParameters) {
    this.run('SUCCESS', message, opt);
  }

  warning (message: string, opt?: LoggerParameters) {
    this.run('WARNING', message, opt);
  }
}

const log = new LogManager();

export { log, LogManager };