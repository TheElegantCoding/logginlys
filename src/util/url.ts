import { colorAnsi } from '@src/constant/color.js';
import { ansiStyle } from '@src/constant/style.js';
import { isNode } from '@src/util/validation.js';

const getUrlPathname = (url: string) => {
  const urlObject = new URL(url);
  const path = urlObject.pathname + urlObject.search;

  return path;
};

const ansiUrl = (url: string) => {
  return `${ansiStyle.underline}${colorAnsi.blueBright}${url}${colorAnsi.reset}`;
};

const logUrl = (url: string) => {
  if (isNode) {
    return ansiUrl(url);
  }
  return url;
};

export {
  logUrl,
  ansiUrl,
  getUrlPathname
};