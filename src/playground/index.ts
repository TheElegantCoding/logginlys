import {
  colorCss,
  colorAnsi,
  LogManager
} from '@src/index.js';
import { loggerColumn } from '@src/module/logger_column.js';
import { loggerStyle } from '@src/module/logger_style.js';
import { loggerUrl } from '@src/module/logger_url.js';

const log = new LogManager();

log.blank();
log.blank();
// Default example usage
log.info('This is an info message');
log.success('This is a success message');
log.error('This is an error message');
log.warning('This is a warning message');
log.debug('This is a debug message');
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

log.log(`this is a url: ${loggerUrl('https://example.com/api/data?query=123')}`);

log.blank();
log.blank();

// Custom styles example usage
const logger = new LogManager({
  prefix: '[My App]',
  isDev: true,
  showTimestamp: true,
  blankAbove: false,
  blankBelow: false,
  info: {
    icon: '\uebc6',
    emoji: 'ℹ️'
  },
  setup: {
    icon: '\uebd7',
    emoji: '⚙️',
    ansi: {
      color: '\u001b[0;36m',
      bg: '\u001b[46m'
    }
  }
});

logger.info('This is an info message');
logger.setup('This is a setup message');

logger.blank();
logger.blank();

// Custom log example
log.info('This is an info message with custom styles', {
  prefix: '[Custom Prefix]',
  showTimestamp: false,
  icon: '\uebc6',
  emoji: 'ℹ️',
  ansi: {
    color: '\u001b[0;36m',
    bg: '\u001b[46m'
  }
});
log.success('This is a success message', { blankAbove: true, showBadge: false, showTimestamp: false });

logger.blank();

// Box usage examples
log.box('Box message', {
  blankAbove: true,
  blankBelow: true
});

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

logger.blank();

// Column usage example
const columnMessage = [
  'Column line 1',
  'Column line 2',
  'Column line 3',
  'Column line 4',
  'Column line 5',
  'Column line 6',
  'Column line 7'
];

log.info(`Column example:\n\n${loggerColumn(columnMessage, { width: 80, padding: 4 })}`);

logger.blank();
logger.blank();

// style usage example
log.info(loggerStyle.ansi('Styled message', {
  bold: true,
  color: colorAnsi.blue,
  bg: colorAnsi.bgYellow
}));

logger.blank();
logger.blank();

// loader
const loader = logger.loader({
  message: 'Loading...',
  position: 'left',
  color: colorAnsi.cyan,
  showTimestamp: true,
  type: 'line'
});

loader.start();
