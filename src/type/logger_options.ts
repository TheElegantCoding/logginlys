import type { loaderStyle } from '@src/constant/loader_style.js';

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
  gradient?: boolean;
  finalMessage?: string;
  showTimestamp?: boolean;
  position?: 'left' | 'right';
  type?: keyof typeof loaderStyle;
};

export type { LoggerParameters, LoggerLoaderParameters };