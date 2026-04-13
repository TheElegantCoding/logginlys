import { colorCss, colorAnsi } from '@src/constant/color.js';
import { defaultLogger } from '@src/constant/default_logger.js';
import { emoji } from '@src/constant/emoji.js';
import { icon } from '@src/constant/icon.js';
import { logBox } from '@src/util/box.js';
import { LoggerLoader } from '@src/util/loader.js';
import { getUrlPathname } from '@src/util/url.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerStyles, LogLevelType } from '@src/type/logger_base_type.js';
import type { LoggerBoxParameters, LoggerHttpParameters, LoggerStyleParameters } from '@src/type/logger_method_type.js';
import type { LoggerParameters, LoggerClassParameters, LoggerLoaderParameters } from '@src/type/logger_options.js';

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

  private formatAnsi (
    time: string,
    level: string,
    message: string,
    config: LoggerStyles
  ) {
    const timestamp = `${colorAnsi.gray}${time}${colorAnsi.reset}`;
    const levelInfo = `${config.ansi?.bg} ${config.icon} ${level.toUpperCase()} ${colorAnsi.reset}`;
    const messageLog = `${config.ansi?.color}${message}${colorAnsi.reset}`;

    return [`${timestamp} ${levelInfo} ${messageLog}`];
  }

  private formatCss (
    time: string,
    level: string,
    message: string,
    config: LoggerStyles
  ) {
    return [
      `%c${time} %c${config.emoji} ${level.toUpperCase()}%c ${message}`,
      `color: ${colorCss.gray};`,
      `background: ${config.css?.bg}; color: ${colorCss.white}; font-weight: bold; padding: 2px 6px; border-radius: 3px;`,
      `color: ${config.css?.color}; font-weight: bold;`
    ];
  }

  private formatMessage (level: LogLevelType, message: string, extras?: LoggerParameters) {
    const config = { ...defaultLogger[level], ...this.options[level], ...extras };
    const time = extras?.showTimestamp ?? this.options.showTimestamp ? `${this.getTimestamp()}` : '';
    const prefix = extras?.prefix ?? this.options.prefix ? `${extras?.prefix ?? this.options.prefix} ` : '';
    const fullMessage = `${prefix}${message}`;

    if (isNode) {
      return this.formatAnsi(
        time,
        level,
        fullMessage,
        config
      );
    }

    return this.formatCss(
      time,
      level,
      fullMessage,
      config
    );
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

  box (message: string, options?: LoggerBoxParameters) {
    logBox(message, options);
  }

  debug (message: string, opt?: LoggerStyleParameters) {
    this.run('debug', message, opt);
  }

  error (message: string, opt?: LoggerStyleParameters) {
    this.run('error', message, opt);
  }

  http (options?: LoggerHttpParameters) {
    const path = getUrlPathname(options?.url ?? '');

    this.run('http', `${options?.method} ${options?.status} - ${path} (${options?.time}ms)`, options);
  }

  httpError (message: string, options?: LoggerHttpParameters) {
    const path = getUrlPathname(options?.url ?? '');

    this.run('error', `${options?.method} ${options?.status} - ${path} (${options?.time}ms) - ${message}`, options);
  }

  info (message: string, opt?: LoggerStyleParameters) {
    this.run('info', message, opt);
  }

  loader ({ message, position, color }: LoggerLoaderParameters) {
    return new LoggerLoader({ message, position, color });
  }

  log (message: string, opt?: LoggerStyleParameters) {
    this.run('log', message, opt);
  }

  setup (message: string, opt?: LoggerStyleParameters) {
    this.run('setup', message, opt);
  }

  success (message: string, opt?: LoggerStyleParameters) {
    this.run('success', message, opt);
  }

  warning (message: string, opt?: LoggerStyleParameters) {
    this.run('warning', message, opt);
  }
}

const log = new LogManager();

export {
  log,
  icon,
  emoji,
  colorCss,
  colorAnsi,
  LogManager
};