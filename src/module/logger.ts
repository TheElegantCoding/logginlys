import { colorCss, colorAnsi } from '@src/constant/color.js';
import { defaultLogger } from '@src/constant/default_logger.js';
import { loggerBox } from '@src/module/logger_box.js';
import { LoggerLoader } from '@src/module/logger_loader.js';
import { loggerStyle } from '@src/module/logger_style.js';
import { getUrlPathname } from '@src/module/logger_url.js';
import { getTime } from '@src/util/time.js';
import { isNode } from '@src/util/validation.js';

import type { LogLevelType } from '@src/type/logger_base_type.js';
import type { LoggerBoxParameters, LoggerHttpParameters, LoggerStyleParameters } from '@src/type/logger_method_type.js';
import type { LoggerParameters, LoggerLoaderParameters } from '@src/type/logger_options.js';

class LogManager {
  private readonly options: LoggerParameters;

  constructor (options: Partial<LoggerParameters> = {}) {
    this.options = {
      showTimestamp: true,
      showBadge: true,
      isDev: true,
      prefix: '',
      ...options
    };
  }

  private formatAnsi (time: string, message: string, config: LoggerStyleParameters) {
    const timestamp = loggerStyle.ansi(time, { color: colorAnsi.gray });
    const badge = config.ansi?.badge ? ` ${config.ansi.badge} ` : ' ';
    const levelInfo = config.showBadge ? badge : ' ';
    const messageLog = loggerStyle.ansi(message, { bold: true });

    return [`${timestamp}${levelInfo}${messageLog}`];
  }

  private formatCss (
    time: string,
    level: string,
    message: string,
    config: LoggerStyleParameters
  ) {
    const badgeStyle = `background: ${config.css?.bg}; color: ${colorCss.white}; font-weight: bold; padding: 2px 6px; border-radius: 3px;`;
    const [timeText, timeStyle] = loggerStyle.css(time, `color: ${colorCss.gray};`);
    const [levelText, levelStyle] = loggerStyle.css(`${config.emoji} ${level.toUpperCase()}`, badgeStyle);
    const [messageText, messageStyle] = loggerStyle.css(` ${message}`, `color: ${config.css?.color}; font-weight: bold;`);

    return [
      `${timeText} ${levelText} ${messageText}`,
      timeStyle,
      levelStyle,
      messageStyle
    ];
  }

  private formatMessage (level: LogLevelType, message: string, extras?: LoggerParameters) {
    const config = { ...defaultLogger[level], ...extras } as LoggerStyleParameters;
    const showTime = extras?.showTimestamp ?? this.options.showTimestamp;
    const time = showTime ? getTime() : '';
    const currentPrefix = extras?.prefix ?? this.options.prefix;
    const fullMessage = currentPrefix ? `${currentPrefix} ${message}` : message;

    if (isNode) {
      return this.formatAnsi(time, fullMessage, config);
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

    this.runWithSpacing(() => {
      console.log(...this.formatMessage(type, message, extras));
    }, extras);
  }

  private runWithSpacing (action: () => void, extras?: LoggerParameters) {
    if (extras?.blankAbove || this.options.blankAbove) { console.log(''); }
    action();
    if (extras?.blankBelow || this.options.blankBelow) { console.log(''); }
  }

  blank () {
    console.log('');
  }

  box (message: string, options?: LoggerBoxParameters) {
    loggerBox(message, options);
  }

  debug (message: string, options?: LoggerParameters) {
    this.run('debug', message, options);
  }

  error (message: string, options?: LoggerParameters) {
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

  info (message: string, options?: LoggerParameters) {
    this.run('info', message, options);
  }

  loader (options: LoggerLoaderParameters) {
    return new LoggerLoader({ ...options });
  }

  log (message: string, options?: LoggerParameters) {
    this.run('log', message, options);
  }

  setup (message: string, options?: LoggerParameters) {
    this.run('setup', message, options);
  }

  success (message: string, options?: LoggerParameters) {
    this.run('success', message, options);
  }

  warning (message: string, options?: LoggerParameters) {
    this.run('warning', message, options);
  }
}

export { LogManager };