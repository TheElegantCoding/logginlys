type LogLevelType =
  'log'
  | 'info'
  | 'http'
  | 'error'
  | 'debug'
  | 'setup'
  | 'warning'
  | 'success';

type LoggerStyles = {
  icon?: string;
  emoji?: string;
  css?: {
    bg?: string;
    color?: string;
  };
  ansi?: {
    bg?: string;
    color?: string;
  };
};

type LoggerParameters = {
  prefix?: string;
  isDev?: boolean;
  blankAbove?: boolean;
  blankBelow?: boolean;
  showTimestamp?: boolean;
};

type LoggerClassParameters = LoggerParameters & {
  prefix?: string;
  isDev?: boolean;
  log?: LoggerStyles;
  info?: LoggerStyles;
  http?: LoggerStyles;
  blankAbove?: boolean;
  blankBelow?: boolean;
  debug?: LoggerStyles;
  error?: LoggerStyles;
  setup?: LoggerStyles;
  warning?: LoggerStyles;
  success?: LoggerStyles;
  showTimestamp?: boolean;
};

type LoggerHttpParameters = LoggerParameters & {
  url: string;
  time?: number;
  method: string;
  status: number;
};

type LoggerRunParameters = LoggerParameters & {
  type: LogLevelType;
};

export type {
  LogLevelType,
  LoggerStyles,
  LoggerParameters,
  LoggerRunParameters,
  LoggerHttpParameters,
  LoggerClassParameters
};