import { loggerAnsiStyle } from '@src/constant/ansi_style.js';
import { colorAnsi } from '@src/constant/color.js';
import { isNode } from '@src/util/validation.js';

const getUrlPathname = (url: string) => {
  const urlObject = new URL(url);
  const path = urlObject.pathname + urlObject.search;

  return path;
};

const ansiUrl = (url: string) => {
  return `${loggerAnsiStyle.underline}${colorAnsi.blueBright}${url}${colorAnsi.reset}`;
};

const loggerUrl = (url: string) => {
  if (isNode) {
    return ansiUrl(url);
  }
  return url;
};

export {
  ansiUrl,
  loggerUrl,
  getUrlPathname
};