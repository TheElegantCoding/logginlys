import { colorCss, colorAnsi } from '@src/constant/color.js';
import { defaultLogger } from '@src/constant/default_logger.js';
import { emoji } from '@src/constant/emoji.js';
import { icon } from '@src/constant/icon.js';
import { logBox } from '@src/util/box.js';
import { LoggerLoader } from '@src/util/loader.js';
import { getTime } from '@src/util/time.js';
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
      showBadge: true,
      isDev: true,
      prefix: '',
      ...options
    };
  }

  private formatAnsi (
    time: string,
    level: string,
    message: string,
    config: LoggerStyles & LoggerParameters
  ) {
    const timestamp = `${colorAnsi.gray}${time}${colorAnsi.reset}`;

    const levelInfo = config.showBadge ? ` ${config.ansi?.bg} ${config.icon} ${level.toUpperCase()} ${colorAnsi.reset} ` : ' ';
    const messageLog = `${config.ansi?.color}${message}${colorAnsi.reset}`;

    return [`${timestamp}${levelInfo}${messageLog}`];
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
    const time = extras?.showTimestamp ?? this.options.showTimestamp ? getTime() : '';
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

  custom (message: string, options?: LoggerStyleParameters) {
    this.run('debug', message, options);
  }

  debug (message: string, options?: LoggerStyleParameters) {
    this.run('debug', message, options);
  }

  error (message: string, options?: LoggerStyleParameters) {
    this.run('error', message, options);
  }

  http (options?: LoggerHttpParameters) {
    const path = getUrlPathname(options?.url ?? '');

    this.run('http', `${options?.method} ${options?.status} - ${path} (${options?.time}ms)`, options);
  }

  httpError (message: string, options?: LoggerHttpParameters) {
    const path = getUrlPathname(options?.url ?? '');

    this.run('error', `${options?.method} ${options?.status} - ${path} (${options?.time}ms) - ${message}`, options);
  }

  info (message: string, options?: LoggerStyleParameters) {
    this.run('info', message, options);
  }

  loader ({ message, position, color }: LoggerLoaderParameters) {
    return new LoggerLoader({ message, position, color });
  }

  log (message: string, options?: LoggerStyleParameters) {
    this.run('log', message, options);
  }

  setup (message: string, options?: LoggerStyleParameters) {
    this.run('setup', message, options);
  }

  success (message: string, options?: LoggerStyleParameters) {
    this.run('success', message, options);
  }

  warning (message: string, options?: LoggerStyleParameters) {
    this.run('warning', message, options);
  }
}

const log = new LogManager();

export type {
  LoggerParameters,
  LoggerClassParameters,
  LoggerStyleParameters
};

export {
  log,
  icon,
  emoji,
  colorCss,
  colorAnsi,
  LogManager,
  LoggerLoader
};