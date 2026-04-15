import {
  colorCss,
  colorAnsi,
  LogManager
} from '@src/index.js';
import { logUrl } from '@src/util/url.js';

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

log.log(`this is a url: ${logUrl('https://example.com/api/data?query=123')}`);

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

// loader
const loader = logger.loader({
  message: 'Loading...',
  position: 'left',
  color: colorAnsi.cyan
});

loader.start();
