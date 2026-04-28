import { colorAnsi } from '@src/constant/color.js';
import { loaderStyle } from '@src/constant/loader_style.js';
import { loggerIcon } from '@src/constant/logger_icon.js';
import { loggerStyle } from '@src/module/logger_style.js';
import { getTime } from '@src/util/time.js';
import { isNode } from '@src/util/validation.js';

import type { LoggerLoaderParameters } from '@src/type/logger_options.js';

class LoggerLoader {
  private readonly color: string = colorAnsi.blueBright;
  private readonly finalMessage: string = `Loading... ${loggerStyle.ansi(loggerIcon.check, { color: colorAnsi.green })}`;
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
    finalMessage,
    showTimestamp,
    type
  }: LoggerLoaderParameters) {
    this.message = message;
    this.finalMessage = finalMessage ?? this.finalMessage;
    this.position = position ?? this.position;
    this.color = color ?? this.color;
    this.showTimestamp = showTimestamp ?? this.showTimestamp;
    this.type = type ?? this.type;
  }

  public start () {
    if (!isNode) { return; }

    const timeText = loggerStyle.ansi(getTime(), { color: colorAnsi.gray });
    const time = this.showTimestamp ? `${timeText} ` : '';

    this.timer = setInterval(() => {
      const frame = loggerStyle.ansi(loaderStyle[this.type][this.frameIndex] as string, { color: this.color });

      if (this.position === 'left') {
        process.stdout.write(`\r${time}${frame} ${this.message}`);
      } else {
        process.stdout.write(`\r${time}${this.message} ${frame}`);
      }

      this.frameIndex = (this.frameIndex + 1) % loaderStyle[this.type].length;
    }, 80);
  }

  public stop () {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    process.stdout.write('\r\u001b[2K');

    const timeText = loggerStyle.ansi(getTime(), { color: colorAnsi.gray });
    const time = this.showTimestamp ? `${timeText} ` : '';

    process.stdout.write(`\r\u001b[K${time}${this.finalMessage}\n`);
  }
}

export { LoggerLoader };