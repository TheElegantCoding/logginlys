import { color, defaultLogger } from '@src/constant/logger_constant.js';
import { isNode } from '@src/util/validation.js';

import type {
  LogLevelType,
  LoggerStyles,
  LoggerParameters,
  LoggerHttpParameters,
  LoggerClassParameters
} from '@src/type/logger_type.js';

class LogManager {
  private readonly options: LoggerClassParameters;

  constructor (options: Partial<LoggerClassParameters> = {}) {
    this.options = {
      showTimestamp: true,
      isDev: true,
      prefix: '',
      ...options
    };
  }

  private formatMessage (level: LogLevelType, message: string, extras?: LoggerParameters) {
    if (!this.options.isDev) { return []; }

    const config = { ...defaultLogger[level], ...this.options[level], ...extras };
    const showTimestamp = extras?.showTimestamp ?? this.options.showTimestamp;
    const currentPrefix = extras?.prefix ?? this.options.prefix;
    const time = showTimestamp ? `${this.getTimestamp()}` : '';
    const prefix = currentPrefix ? `${currentPrefix} ` : '';
    const fullMessage = `${prefix}${message}`;

    if (isNode) {
      const messageLog = `${config.ansi.color}${fullMessage}${color.ansi.color.reset}`;
      return [`${color.ansi.color.grey}${time}${color.ansi.color.reset} ${config.ansi.bg} ${config.icon} ${level.toUpperCase()} ${color.ansi.color.reset} ${messageLog}`];
    }

    return [
      `%c${time} %c${config.emoji} ${level.toUpperCase()}%c ${fullMessage}`,
      `color: ${color.css.color.grey};`,
      `background: ${config.css.bg}; color: ${color.css.color.white}; font-weight: bold; padding: 2px 6px; border-radius: 3px;`,
      `color: ${config.css.color}; font-weight: bold;`
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

  debug (message: string, opt?: LoggerParameters) {
    this.run('debug', message, opt);
  }

  error (message: string, opt?: LoggerParameters) {
    this.run('error', message, opt);
  }

  http (options?: LoggerHttpParameters) {
    const url = new URL(options?.url ?? '');
    const path = url.pathname + url.search;

    this.run('http', `${options?.method} ${options?.status} - ${path} (${options?.time}ms)`, options);
  }

  httpError (message: string, options?: LoggerHttpParameters) {
    const url = new URL(options?.url ?? '');
    const path = url.pathname + url.search;

    this.run('error', `${options?.method} ${options?.status} - ${path} (${options?.time}ms) - ${message}`, options);
  }

  info (message: string, opt?: LoggerStyles & LoggerParameters) {
    this.run('info', message, opt);
  }

  log (message: string, opt?: LoggerParameters) {
    this.run('log', message, opt);
  }

  setup (message: string, opt?: LoggerParameters) {
    this.run('setup', message, opt);
  }

  success (message: string, opt?: LoggerParameters) {
    this.run('success', message, opt);
  }

  warning (message: string, opt?: LoggerParameters) {
    this.run('warning', message, opt);
  }
}

const log = new LogManager();

export { log, LogManager };