const ICON = {
  CHECK: '\uf00c',
  ERROR: '\uf00d',
  INFO: '\uf05a',
  WARNING: '\uf071',
  DEBUG: '\ued7b',
  HTTP: '\udb81\udd9f',
  LOG: '\uf03a',
  ROCKET: '\uf135'
};

const EMOJI = {
  CHECK: '✅',
  ERROR: '❌',
  INFO: 'ℹ️',
  WARNING: '⚠️',
  HTTP: '🌐',
  DEBUG: '🪲',
  LOG: '📋',
  ROCKET: '🚀'
};

const COLORS = {
  ANSI: {
    BLUE: '\u001b[34m',
    GREEN: '\u001b[32m',
    YELLOW: '\u001b[33m',
    RED: '\u001b[31m',
    PURPLE: '\u001b[35m',
    GREY: '\u001b[90m',
    CYAN: '\u001b[36m',
    BG_BLUE: '\u001b[44;1;37m',
    BG_GREEN: '\u001b[42;1;37m',
    BG_CYAN: '\u001b[46;1;37m',
    BG_YELLOW: '\u001b[43;1;37m',
    BG_RED: '\u001b[41;1;37m',
    BG_PURPLE: '\u001b[45;1;37m',
    BG_GREY: '\u001b[100;1;37m',
    RESET: '\u001b[0m'
  },
  CSS: {
    BLUE: '#3498db',
    GREEN: '#2ecc71',
    YELLOW: '#f1c40f',
    RED: '#e74c3c',
    PURPLE: '#9b59b6',
    CYAN: '#1abc9c',
    GREY: '#95a5a6'
  }
};

const DEFAULT_LOGGER = {
  ERROR: {
    level: 'ERROR',
    icon: ICON.ERROR,
    emoji: EMOJI.ERROR,
    color: COLORS.CSS.RED,
    ansi: COLORS.ANSI.RED,
    bgAnsi: COLORS.ANSI.BG_RED
  },
  INFO: {
    level: 'INFO',
    icon: ICON.INFO,
    emoji: EMOJI.INFO,
    color: COLORS.CSS.BLUE,
    ansi: COLORS.ANSI.BLUE,
    bgAnsi: COLORS.ANSI.BG_BLUE
  },
  HTTP: {
    level: 'HTTP',
    icon: ICON.HTTP,
    emoji: EMOJI.HTTP,
    color: COLORS.CSS.BLUE,
    ansi: COLORS.ANSI.BLUE,
    bgAnsi: COLORS.ANSI.BG_BLUE
  },
  WARNING: {
    level: 'WARNING',
    icon: ICON.WARNING,
    emoji: EMOJI.WARNING,
    color: COLORS.CSS.YELLOW,
    ansi: COLORS.ANSI.YELLOW,
    bgAnsi: COLORS.ANSI.BG_YELLOW
  },
  SUCCESS: {
    level: 'SUCCESS',
    icon: ICON.CHECK,
    emoji: EMOJI.CHECK,
    color: COLORS.CSS.GREEN,
    ansi: COLORS.ANSI.GREEN,
    bgAnsi: COLORS.ANSI.BG_GREEN
  },
  DEBUG: {
    level: 'DEBUG',
    icon: ICON.DEBUG,
    emoji: EMOJI.DEBUG,
    color: COLORS.CSS.PURPLE,
    ansi: COLORS.ANSI.PURPLE,
    bgAnsi: COLORS.ANSI.BG_PURPLE
  },
  LOG: {
    level: 'LOG',
    icon: ICON.LOG,
    emoji: EMOJI.LOG,
    color: COLORS.CSS.GREY,
    ansi: COLORS.ANSI.GREY,
    bgAnsi: COLORS.ANSI.BG_GREY
  },
  SETUP: {
    level: 'SETUP',
    icon: ICON.ROCKET,
    emoji: EMOJI.ROCKET,
    color: COLORS.CSS.CYAN,
    ansi: COLORS.ANSI.CYAN,
    bgAnsi: COLORS.ANSI.BG_CYAN
  }
};

export {
  ICON,
  EMOJI,
  COLORS,
  DEFAULT_LOGGER
};