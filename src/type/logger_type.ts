type LogLevelType =
  'LOG'
  | 'INFO'
  | 'HTTP'
  | 'ERROR'
  | 'DEBUG'
  | 'SETUP'
  | 'WARNING'
  | 'SUCCESS';

type LoggerParameters = {
  prefix?: string;
  isDev?: boolean;
  blankAbove?: boolean;
  blankBelow?: boolean;
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
  LoggerParameters,
  LoggerRunParameters,
  LoggerHttpParameters
};