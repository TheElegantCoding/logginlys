<img src="./.github/asset/illustration/wave_header.svg" width="100%" />

<h1 id="top" align="center">
  <img src="./.github/asset/icon/terminal.svg" alt="divider" width="28px" align="center" />
  Logginlys
</h1>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<img src="./.github/asset/illustration/cover.svg" width="100%" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/bun_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/node_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/npm_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/git_badge.svg" height="34px" />
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
Logginlys is a lightweight, high-performance TypeScript logging library designed to provide a consistent visual experience across both Node.js (Terminal) and Browser environments.
<br /><br />
Forget about messy `console.log` statements. Logginlys automatically detects your environment and applies beautiful ANSI styles or CSS badges to keep your debugging process organized and readable.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="18px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/thunder.svg" width="18px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="18px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="18px" align="center" /> Usage](#usage)
- [<img src="./.github/asset/icon/gear.svg" width="18px" align="center" /> Configuration](#configuration)

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="24px" align="center"/>
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h1 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h1>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D logginlys
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D logginlys
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D logginlys
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D logginlys
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

General use is as simple as importing the `log` object and calling its methods:

```ts
import { log } from 'logginlys';

log.info('This is an info message');
log.success('This is a success message');
log.error('This is an error message');
log.warning('This is a warning message');
log.debug('This is a debug message');
log.log('This is a log message');
log.blank();
log.setup('This is a setup message');
log.http({
  url: 'https://example.com/api/data?query=123',
  method: 'GET',
  status: 200,
  time: 150
});
log.httpError('This is a HTTP error message', {
  url: 'https://example.com/api/data?query=123',
  method: 'POST',
  status: 500,
  time: 300
});
```

The result will be this:

<img src="./.github/asset/image/preview.png" width="100%" />
<img src="./.github/asset/image/preview_browser.png" width="100%" />

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<h2 id="configuration">
  <img src="./.github/asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

You can customize the logger by passing an options object to the `Logger` class constructor or to each log method. The options object can have the following properties:

- `prefix` (string): A custom prefix to be added before each log message.
- `isDev` (boolean): A flag to enable or disable logging. If set to `false`, all log methods will be no-ops.
- `showTimestamp` (boolean): A flag to enable or disable timestamps in log messages.
- `showBadge` (boolean): A flag to enable or disable badges in log messages.
- `blankAbove` (boolean): A flag to add a blank line above the log message.
- `blankBelow` (boolean): A flag to add a blank line below the log message.
- `icon` (string): A custom icon to be displayed before the log message (only for ansi).
- `emoji` (string): A custom emoji to be displayed before the log message (only for browser).

### Log level specific styles

- `log`, `info`, `http`, `debug`, `error`, `setup`, `warning`, `success` (object): Objects to customize styles for specific log levels, with the same properties as above.
- `http` (object): An object to customize styles for HTTP logs, with the same properties as above.
- `httpError` (object): An object to customize styles for HTTP error logs, with the same properties as above.
- `box` (object): An object to customize styles for box logs, with the same properties as above.
- `loader` (object): An object to customize styles for loader logs, with the same properties as above.

To customize the logger globally, you can do the following:

```ts
import { LogManager } from 'logginlys';

const logger = new LogManager({
  prefix: '[My App]',
  isDev: true,
  showTimestamp: true,
  blankAbove: false,
  blankBelow: false
});

logger.info('This is an info message');
logger.setup('This is a setup message');
```

<br />

In case you want to customize one log message you can do the following: 

```ts
import { LogManager } from 'logginlys';

const log = new LogManager();

log.info('This is an info message with custom styles', {
  prefix: '[Custom Prefix]',
  showTimestamp: false,
});
log.success('This is a success message', { blankAbove: true });
```

<br />

To log box messages, you can use the `log.box` method:

```ts
import { LogManager } from 'logginlys';

const log = new LogManager();

log.box('Box message');

log.box('Box message', {
  blankAbove: true,
  blankBelow: true,
  boxStyle: 'bold',
  width: 40,
  height: 7,
  ansi: {
    color: colorAnsi.green,
    borderColor: colorAnsi.blue
  },
  css: {
    color: colorCss.green,
    borderColor: colorCss.blue,
    bgColor: colorCss.bgBlack,
    padding: '10px 15px'
  }
});
```

Resulting in this:

<img src="./.github/asset/image/box.png" width="100%" />
<img src="./.github/asset/image/box_browser.png" width="100%" />

<br />

To use loader logs, you can use the `log.loader` method:

```ts
const loader = logger.loader({
  message: 'Loading...',
  position: 'left',
  color: colorAnsi.cyan,
});

loader.start();
loader.stop('Finished loading!', icon.check);
```

<img src="./.github/asset/image/loader.png" width="100%" />
<img src="./.github/asset/image/loader_finish.png" width="100%" />

You have the option to customize the loader message, position and color. You can also use different icons to indicate the status of the loader.

- `message` (string): The message to be displayed next to the loader.
- `position` (string): The position of the loader, can be 'left', 'right' or 'center'.
- `color` (string): The color of the loader, can be any valid ANSI color code for terminal or any valid CSS color for browser.
- `showTimestamp` (boolean): A flag to enable or disable timestamps in loader messages.
- `type` (string): The type of the loader animation, can be 'line', 'dots', 'bounce' or 'circle', 'aesthetic', 'binary' or 'grow'.

<br />

Column logs are also available using the `loggerColumn` method:

```ts
logger.info(`Column example:\n\n${loggerColumn(columnMessage, { width: 80, padding: 4 })}`);
```

Resulting in this:

<img src="./.github/asset/image/column.png" width="100%" />
<img src="./.github/asset/image/column_browser.png" width="100%" />

<br />

Custom style text can be created using the `loggerStyle` method:

```ts
// Ansi example
logger.info(loggerStyle.ansi('Styled message', {
  bold: true,
  color: colorAnsi.blue,
  bg: colorAnsi.bgYellow
}));

// CSS example
logger.info(loggerStyle.css('Styled message', {
  color: colorCss.blue,
  'background-color': colorCss.bgYellow, 
  padding: '5px 10px',
  'border-radius': '5px'
}));
```

Resulting in this:

<img src="./.github/asset/image/style.png" width="100%" />
<img src="./.github/asset/image/style_browser.png" width="100%" />

<br />

In case you want to create your own custom log method, you can extend the `LogManager` class and add your custom method:

```ts
class MyCustomLogger extends LogManager {
  typescript(message: string, options?: LoggerStyleParameters) {
    const tsStyle: LoggerStyleParameters = {
      ansi: { color: '\u001b[36m' },
      showBadge: false,
      emoji: '🟦',
      icon: 'TS'
    };
    
    this.custom(message, { ...options, ...tsStyle });
  }
}

const log = new MyCustomLogger();
log.typescript('This is a custom TypeScript log message');
``` 

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" />