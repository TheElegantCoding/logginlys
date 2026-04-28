type LogLevelType =
  'log'
  | 'info'
  | 'http'
  | 'error'
  | 'debug'
  | 'setup'
  | 'warning'
  | 'success';

type BoxType =
  'bold'
  | 'simple'
  | 'double'
  | 'dashed'
  | 'rounded';

type LoggerStyles = {
  icon?: string;
  emoji?: string;
  css?: {
    bg?: string;
    color?: string;
  };
  ansi?: {
    bg?: string;
    badge?: string;
    color?: string;
  };
};

export type {
  BoxType,
  LogLevelType,
  LoggerStyles
};