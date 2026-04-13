import { box } from '@src/constant/box.js';
import { colorCss, colorAnsi } from '@src/constant/color.js';
import { makeEven } from '@src/util/number.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerBoxParameters } from '@src/type/logger_method_type.js';

const defaultBoxOptions: LoggerBoxParameters = {
  height: 5,
  ansi: {
    color: colorAnsi.white,
    borderColor: colorAnsi.white
  },
  css: {
    color: colorCss.white,
    borderColor: colorCss.white,
    bgColor: colorCss.bgGray
  },
  blankAbove: false,
  blankBelow: false,
  width: 12,
  boxStyle: 'rounded'
};

const getBoxLayout = (message: string, options: LoggerBoxParameters) => {
  const padding = 4;
  const lines = message.split('\n');
  const evenWidth = makeEven(options.width ?? 0);
  const style = box[options.boxStyle ?? 'rounded'];
  const border = style.border.repeat(message.length + padding + evenWidth);
  const top = `${options.ansi?.borderColor ?? ''}${style.topLeft}${border}${style.topRight}`;
  const space = ' '.repeat(Math.floor((padding + evenWidth) / 2));
  let middle = '';

  for (const line of lines) {
    const lineSpace = ' '.repeat(Math.floor((message.length - line.length) / 2));
    const isLastLine = line === lines.at(-1);
    middle += `${style.left}${space}${lineSpace}${options.ansi?.color ?? ''}${line}${colorAnsi.reset}${options.ansi?.borderColor}${lineSpace}${space}${style.right}${isLastLine ? '' : '\n'}`;
  }
  const bottom = `${style.bottomLeft}${border}${style.bottomRight}${colorAnsi.reset}`;

  return {
    style,
    top,
    middle,
    bottom,
    space
  };
};

const logAnsiBox = (message: string, options?: LoggerBoxParameters) => {
  const boxOptions = { ...defaultBoxOptions, ...options };
  const {
    style,
    top,
    middle,
    bottom,
    space
  } = getBoxLayout(message, boxOptions);

  if (boxOptions.blankAbove) { console.log(''); }

  console.log(top);

  if (boxOptions.height && boxOptions.height > 1) {
    const emptyLine = `${style.left}${space}${' '.repeat(message.length)}${space}${style.right}`;

    for (let index = 0; index < boxOptions.height - 2; index++) {
      if (index === Math.floor((boxOptions.height - 2) / 2)) {
        console.log(middle);
      } else {
        console.log(emptyLine);
      }
    }
  }

  console.log(bottom);

  if (boxOptions.blankBelow) { console.log(''); }
};

const logCssBox = (message: string, options?: LoggerBoxParameters) => {
  const boxOptions = { ...defaultBoxOptions, ...options };

  const style = `display: flex;
    align-items: center;
    justify-content: center;
    color: ${boxOptions.css?.color};
    background-color: ${boxOptions.css?.bgColor};
    border: 2px solid ${boxOptions.css?.borderColor};
    border-radius: 4px;
    padding: ${boxOptions.css?.padding ?? '10px'};
  `;

  if (boxOptions.blankAbove) { console.log(''); }
  console.log(`%c${message}`, style);
  if (boxOptions.blankBelow) { console.log(''); }

  return [`%c${message}`, style];
};

const logBox = (message: string, options?: LoggerBoxParameters) => {
  if (isNode) {
    logAnsiBox(message, options);
  } else {
    logCssBox(message, options);
  }
};

export { logBox };