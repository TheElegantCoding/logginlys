import type { BoxType, LoggerStyles, LogLevelType } from '@src/type/logger_base_type.js';
import type { LoggerParameters } from '@src/type/logger_options.js';

type LoggerRunParameters = LoggerParameters & {
  type: LogLevelType;
};

type LoggerBoxParameters = {
  width?: number;
  height?: number;
  isDev?: boolean;
  boxStyle?: BoxType;
  blankAbove?: boolean;
  blankBelow?: boolean;
  ansi?: {
    color?: string;
    borderColor?: string;
  };
  css?: {
    color?: string;
    padding?: string;
    bgColor?: string;
    borderColor?: string;
  };
};

type LoggerHttpParameters = LoggerParameters & {
  url: string;
  time?: number;
  method: string;
  status: number;
};

type LoggerStyleParameters = LoggerStyles & LoggerParameters;

export type {
  LoggerBoxParameters,
  LoggerRunParameters,
  LoggerHttpParameters,
  LoggerStyleParameters
};