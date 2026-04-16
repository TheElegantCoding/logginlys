import { colorCss, colorAnsi } from '@src/constant/color.js';
import { loggerEmoji } from '@src/constant/logger_emoji.js';
import { loggerIcon } from '@src/constant/logger_icon.js';
import { LogManager } from '@src/module/logger.js';
import { loggerColumn } from '@src/module/logger_column.js';
import { LoggerLoader } from '@src/module/logger_loader.js';
import { loggerStyle } from '@src/module/logger_style.js';
import { loggerUrl } from '@src/module/logger_url.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerStyleParameters } from '@src/type/logger_method_type.js';
import type { LoggerParameters, LoggerClassParameters } from '@src/type/logger_options.js';

const log = new LogManager();

export type {
  LoggerParameters,
  LoggerClassParameters,
  LoggerStyleParameters
};

export {
  log,
  isNode,
  colorCss,
  loggerUrl,
  colorAnsi,
  loggerIcon,
  LogManager,
  loggerStyle,
  loggerEmoji,
  loggerColumn,
  LoggerLoader
};