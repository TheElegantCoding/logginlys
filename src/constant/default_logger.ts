import { colorCss, colorAnsi } from '@src/constant/color.js';
import { emoji } from '@src/constant/emoji.js';
import { icon } from '@src/constant/icon.js';

const defaultLogger = {
  error: {
    level: 'error',
    icon: icon.error,
    emoji: emoji.error,
    showBadge: true,
    ansi: {
      color: colorAnsi.red,
      bg: colorAnsi.bgRed
    },
    css: {
      color: colorCss.red,
      bg: colorCss.bgRed
    }
  },
  info: {
    level: 'info',
    icon: icon.info,
    emoji: emoji.info,
    showBadge: true,
    ansi: {
      color: colorAnsi.blue,
      bg: colorAnsi.bgBlue
    },
    css: {
      color: colorCss.blue,
      bg: colorCss.bgBlue
    }
  },
  http: {
    level: 'http',
    icon: icon.http,
    emoji: emoji.http,
    showBadge: true,
    ansi: {
      color: colorAnsi.blueBright,
      bg: colorAnsi.bgBlueBright
    },
    css: {
      color: colorCss.bgBlueBright,
      bg: colorCss.bgBlueBright
    }
  },
  warning: {
    level: 'warning',
    icon: icon.warning,
    emoji: emoji.warning,
    showBadge: true,
    ansi: {
      color: colorAnsi.yellow,
      bg: colorAnsi.bgYellow
    },
    css: {
      color: colorCss.yellow,
      bg: colorCss.bgYellow
    }
  },
  success: {
    level: 'success',
    icon: icon.check,
    emoji: emoji.check,
    showBadge: true,
    ansi: {
      color: colorAnsi.green,
      bg: colorAnsi.bgGreen
    },
    css: {
      color: colorCss.green,
      bg: colorCss.bgGreen
    }
  },
  debug: {
    level: 'debug',
    icon: icon.debug,
    emoji: emoji.debug,
    showBadge: true,
    ansi: {
      color: colorAnsi.purple,
      bg: colorAnsi.bgPurple
    },
    css: {
      color: colorCss.purple,
      bg: colorCss.bgPurple
    }
  },
  log: {
    level: 'log',
    icon: icon.log,
    emoji: emoji.log,
    showBadge: true,
    ansi: {
      color: colorAnsi.gray,
      bg: colorAnsi.bgGray
    },
    css: {
      color: colorCss.gray,
      bg: colorCss.bgGray
    }
  },
  setup: {
    level: 'setup',
    icon: icon.rocket,
    emoji: emoji.rocket,
    showBadge: true,
    ansi: {
      color: colorAnsi.cyan,
      bg: colorAnsi.bgCyan
    },
    css: {
      color: colorCss.cyan,
      bg: colorCss.bgCyan
    }
  }
};

export { defaultLogger };