import { loggerAnsiStyle } from '@src/constant/ansi_style.js';
import { colorAnsi } from '@src/constant/color.js';

import type { LoggerStyleAnsiParameters } from '@src/type/logger_style.js';

const setupStyle = (codes: string[], parameters: LoggerStyleAnsiParameters) => {
  if (parameters.bold) { codes.push(loggerAnsiStyle.bold); }
  if (parameters.dim) { codes.push(loggerAnsiStyle.dim); }
  if (parameters.italic) { codes.push(loggerAnsiStyle.italic); }
  if (parameters.inverse) { codes.push(loggerAnsiStyle.inverse); }
  if (parameters.hidden) { codes.push(loggerAnsiStyle.hidden); }
  if (parameters.underline) { codes.push(loggerAnsiStyle.underline); }
  if (parameters.strikethrough) { codes.push(loggerAnsiStyle.strikethrough); }
  if (parameters.reset) { codes.push(loggerAnsiStyle.reset); }

  return codes.join('');
};

const loggerStyle = {
  ansi: (text: string, parameters: LoggerStyleAnsiParameters): string => {
    const codes: string[] = [];

    if (parameters.color) { codes.push(parameters.color); }
    if (parameters.bg) { codes.push(parameters.bg); }
    setupStyle(codes, parameters);

    return `${codes.join('')}${text}${colorAnsi.reset}`;
  },

  css: (text: string, parameters: string): [string, string] => {
    return [`%c${text}`, parameters];
  }
};

export { loggerStyle };