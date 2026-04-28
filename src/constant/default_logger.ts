import { colorCss, colorAnsi } from '@src/constant/color.js';
import { loggerEmoji } from '@src/constant/logger_emoji.js';
import { loggerIcon } from '@src/constant/logger_icon.js';
import { loggerStyle } from '@src/module/logger_style.js';

const defaultLogger = {
  error: {
    level: 'error',
    icon: loggerIcon.error,
    emoji: loggerEmoji.error,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.error} ERROR `, {
        color: colorAnsi.red,
        bg: colorAnsi.bgRed,
        bold: true
      }),
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
    icon: loggerIcon.info,
    emoji: loggerEmoji.info,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.info} INFO `, {
        color: colorAnsi.blue,
        bg: colorAnsi.bgBlue,
        bold: true
      }),
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
    icon: loggerIcon.http,
    emoji: loggerEmoji.http,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.http} HTTP `, {
        color: colorAnsi.blueBright,
        bg: colorAnsi.bgBlueBright,
        bold: true
      }),
      color: colorAnsi.blueBright,
      bg: colorAnsi.bgBlueBright
    },
    css: {
      color: colorCss.blueBright,
      bg: colorCss.bgBlueBright
    }
  },
  warning: {
    level: 'warning',
    icon: loggerIcon.warning,
    emoji: loggerEmoji.warning,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.warning} WARNING `, {
        color: colorAnsi.yellow,
        bg: colorAnsi.bgYellow,
        bold: true
      }),
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
    icon: loggerIcon.check,
    emoji: loggerEmoji.check,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.check} SUCCESS `, {
        color: colorAnsi.green,
        bg: colorAnsi.bgGreen,
        bold: true
      }),
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
    icon: loggerIcon.debug,
    emoji: loggerEmoji.debug,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.debug} DEBUG `, {
        color: colorAnsi.purple,
        bg: colorAnsi.bgPurple,
        bold: true
      }),
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
    icon: loggerIcon.log,
    emoji: loggerEmoji.log,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.log} LOG `, {
        color: colorAnsi.gray,
        bg: colorAnsi.bgGray,
        bold: true
      }),
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
    icon: loggerIcon.rocket,
    emoji: loggerEmoji.rocket,
    showBadge: true,
    ansi: {
      badge: loggerStyle.ansi(` ${loggerIcon.rocket} SETUP `, {
        color: colorAnsi.cyan,
        bg: colorAnsi.bgCyan,
        bold: true
      }),
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