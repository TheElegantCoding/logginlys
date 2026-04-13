const box = {
  double: {
    border: '═',
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
    left: '║',
    right: '║'
  },
  simple: {
    border: '─',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
    left: '│',
    right: '│'
  },
  rounded: {
    border: '─',
    topLeft: '╭',
    topRight: '╮',
    bottomLeft: '╰',
    bottomRight: '╯',
    left: '│',
    right: '│'
  },
  bold: {
    border: '━',
    topLeft: '┏',
    topRight: '┓',
    bottomLeft: '┗',
    bottomRight: '┛',
    left: '┃',
    right: '┃'
  },
  dashed: {
    border: '┄',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
    left: '│',
    right: '│'
  }
};

export { box };