import { colorAnsi } from '@src/constant/color.js';
import { icon } from '@src/constant/icon.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerLoaderParameters } from '@src/type/logger_options.js';

const spinnerFrames = [
  '⠋',
  '⠙',
  '⠹',
  '⠸',
  '⠼',
  '⠴',
  '⠦',
  '⠧',
  '⠇',
  '⠏'
];

class LoggerLoader {
  private readonly color: string = colorAnsi.blueBright;
  private frameIndex = 0;
  private readonly message: string = 'Loading...';
  private readonly position: 'left' | 'right' = 'left';
  private timer: null | NodeJS.Timeout = null;

  constructor ({ message, position, color }: LoggerLoaderParameters) {
    this.message = message;
    this.position = position ?? this.position;
    this.color = color ?? this.color;
  }

  public start () {
    if (!isNode) { return; }

    process.stdout.write('\u001b[?25l');

    this.timer = setInterval(() => {
      const frame = spinnerFrames[this.frameIndex];
      if (this.position === 'left') {
        process.stdout.write(`\r${this.color}${frame}${colorAnsi.reset} ${this.message}`);
      } else {
        process.stdout.write(`\r${this.message}${this.color} ${frame}${colorAnsi.reset}`);
      }

      this.frameIndex = (this.frameIndex + 1) % spinnerFrames.length;
    }, 80);
  }

  public stop (finalMessage?: string, position: 'left' | 'right' = 'left', symbol = icon.check) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (position === 'left') {
      process.stdout.write(`\r\u001b[K${this.color}${symbol}${colorAnsi.reset} ${finalMessage ?? this.message}\n`);
    } else {
      process.stdout.write(`\r\u001b[K${finalMessage ?? this.message} ${this.color}${symbol}${colorAnsi.reset}\n`);
    }
    process.stdout.write('\u001b[?25h');
  }
}

export { LoggerLoader };