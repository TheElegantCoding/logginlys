import { colorAnsi } from '@src/constant/color.js';
import { loaderStyle } from '@src/constant/loader_style.js';
import { loggerIcon } from '@src/constant/logger_icon.js';
import { loggerStyle } from '@src/module/logger_style.js';
import { getTime } from '@src/util/time.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerLoaderParameters } from '@src/type/logger_options.js';

class LoggerLoader {
  private readonly color: string = colorAnsi.blueBright;
  private frameIndex = 0;
  private readonly message: string = 'Loading...';
  private readonly position: 'left' | 'right' = 'right';
  private readonly showTimestamp: boolean = false;
  private timer: null | NodeJS.Timeout = null;
  private readonly type: keyof typeof loaderStyle = 'dots';

  constructor ({
    message,
    position,
    color,
    showTimestamp,
    type
  }: LoggerLoaderParameters) {
    this.message = message;
    this.position = position ?? this.position;
    this.color = color ?? this.color;
    this.showTimestamp = showTimestamp ?? this.showTimestamp;
    this.type = type ?? this.type;
  }

  public start () {
    if (!isNode) { return; }

    const timeText = loggerStyle.ansi(getTime(), { color: colorAnsi.gray });
    const time = this.showTimestamp ? `${timeText} ` : '';

    process.stdout.write('\u001b[?25l');

    this.timer = setInterval(() => {
      const frame = loggerStyle.ansi(loaderStyle[this.type][this.frameIndex] as string, { color: this.color });
      const message = loggerStyle.ansi(this.message, { color: this.color });

      if (this.position === 'left') {
        process.stdout.write(`\r${time}${frame} ${message} `);
      } else {
        process.stdout.write(`\r${time}${message} ${frame}`);
      }

      this.frameIndex = (this.frameIndex + 1) % loaderStyle[this.type].length;
    }, 80);
  }

  public stop (finalMessage?: string, symbol = loggerIcon.check) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    process.stdout.write('\r\u001b[2K');

    const timeText = loggerStyle.ansi(getTime(), { color: colorAnsi.gray });
    const time = this.showTimestamp ? `${timeText} ` : '';
    const message = loggerStyle.ansi(finalMessage ?? this.message, { color: this.color });
    const symbolStyled = loggerStyle.ansi(symbol, { color: colorAnsi.greenBright });

    if (this.position === 'left') {
      process.stdout.write(`\r\u001b[K${time}${symbolStyled} ${message} \n`);
    } else {
      process.stdout.write(`\r\u001b[K${time}${message} ${symbolStyled}\n`);
    }

    process.stdout.write('\u001b[?25h');
  }
}

export { LoggerLoader };