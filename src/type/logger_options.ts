import type { LogLevelType, LoggerStyles } from '@src/type/logger_base_type.js';

type LoggerParameters = {
  prefix?: string;
  isDev?: boolean;
  showBadge?: boolean;
  blankAbove?: boolean;
  blankBelow?: boolean;
  showTimestamp?: boolean;
};

type LoggerLoaderParameters = {
  color?: string;
  message: string;
  showTimestamp?: boolean;
  position?: 'left' | 'right';
};

type LoggerClassParameters = LoggerParameters & Partial<Record<LogLevelType, LoggerStyles>>;

export type { LoggerParameters, LoggerClassParameters, LoggerLoaderParameters };