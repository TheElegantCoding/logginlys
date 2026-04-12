const icon = {
  check: '\uf00c',
  error: '\uf00d',
  info: '\uf05a',
  warning: '\uf071',
  debug: '\ued7b',
  http: '\udb81\udd9f',
  log: '\uf03a',
  rocket: '\uf135'
};

const emoji = {
  check: '✅',
  error: '❌',
  info: 'ℹ️',
  warning: '⚠️',
  http: '🌐',
  debug: '🪲',
  log: '📋',
  rocket: '🚀'
};

const color = {
  ansi: {
    color: {
      blue: '\u001b[34m',
      green: '\u001b[32m',
      azure: '\u001b[94m',
      yellow: '\u001b[33m',
      red: '\u001b[31m',
      purple: '\u001b[35m',
      grey: '\u001b[90m',
      cyan: '\u001b[36m',
      white: '\u001b[37m',
      reset: '\u001b[0m'
    },
    bg: {
      blue: '\u001b[44;1;37m',
      green: '\u001b[42;1;37m',
      azure: '\u001b[104;1;37m',
      cyan: '\u001b[46;1;37m',
      yellow: '\u001b[43;1;37m',
      red: '\u001b[41;1;37m',
      purple: '\u001b[45;1;37m',
      grey: '\u001b[100;1;37m'
    }
  },
  css: {
    color: {
      blue: '#60a5fa',
      green: '#4ade80',
      azure: '#38bdf8',
      yellow: '#facc15',
      red: '#f87171',
      purple: '#c084fc',
      cyan: '#06b6d4',
      white: '#ffffff',
      grey: '#a3a3a3'
    },
    bg: {
      blue: '#2563eb',
      green: '#16a34a',
      azure: '#0284c7',
      yellow: '#ca8a04',
      red: '#dc2626',
      purple: '#9333ea',
      cyan: '#0891b2',
      white: '#ffffff',
      grey: '#525252'
    }
  }
};

const defaultLogger = {
  error: {
    level: 'error',
    icon: icon.error,
    emoji: emoji.error,
    ansi: {
      color: color.ansi.color.red,
      bg: color.ansi.bg.red
    },
    css: {
      color: color.css.color.red,
      bg: color.css.bg.red
    }
  },
  info: {
    level: 'info',
    icon: icon.info,
    emoji: emoji.info,
    ansi: {
      color: color.ansi.color.blue,
      bg: color.ansi.bg.blue
    },
    css: {
      color: color.css.color.blue,
      bg: color.css.bg.blue
    }
  },
  http: {
    level: 'http',
    icon: icon.http,
    emoji: emoji.http,
    ansi: {
      color: color.ansi.color.azure,
      bg: color.ansi.bg.azure
    },
    css: {
      color: color.css.color.azure,
      bg: color.css.bg.azure
    }
  },
  warning: {
    level: 'warning',
    icon: icon.warning,
    emoji: emoji.warning,
    ansi: {
      color: color.ansi.color.yellow,
      bg: color.ansi.bg.yellow
    },
    css: {
      color: color.css.color.yellow,
      bg: color.css.bg.yellow
    }
  },
  success: {
    level: 'success',
    icon: icon.check,
    emoji: emoji.check,
    ansi: {
      color: color.ansi.color.green,
      bg: color.ansi.bg.green
    },
    css: {
      color: color.css.color.green,
      bg: color.css.bg.green
    }
  },
  debug: {
    level: 'debug',
    icon: icon.debug,
    emoji: emoji.debug,
    ansi: {
      color: color.ansi.color.purple,
      bg: color.ansi.bg.purple
    },
    css: {
      color: color.css.color.purple,
      bg: color.css.bg.purple
    }
  },
  log: {
    level: 'log',
    icon: icon.log,
    emoji: emoji.log,
    color: color.css.color.grey,
    ansi: {
      color: color.ansi.color.grey,
      bg: color.ansi.bg.grey
    },
    css: {
      color: color.css.color.grey,
      bg: color.css.bg.grey
    }
  },
  setup: {
    level: 'setup',
    icon: icon.rocket,
    emoji: emoji.rocket,
    ansi: {
      color: color.ansi.color.cyan,
      bg: color.ansi.bg.cyan
    },
    css: {
      color: color.css.color.cyan,
      bg: color.css.bg.cyan
    }
  }
};

export {
  icon,
  emoji,
  color,
  defaultLogger
};