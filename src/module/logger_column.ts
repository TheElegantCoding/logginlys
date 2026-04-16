const loggerColumn = (values: string[], options: { width?: number; padding?: number } = {}) => {
  const terminalWidth = options.width ?? process.stdout.columns;
  const padding = options.padding ?? 2;
  const longestCell = Math.max(...values.map((value) => { return value.length; }));
  const cellWidth = Math.min(longestCell + padding, terminalWidth);
  const columnCount = Math.floor(terminalWidth / cellWidth) || 1;
  const rowCount = Math.ceil(values.length / columnCount) || 1;

  const rows: string[][] = Array.from({ length: rowCount }, () => { return []; });

  values.forEach((value, index) => {
    const rowIndex = index % rowCount;

    let content = value;
    if (content.length > cellWidth - padding) {
      content = `${content.slice(0, cellWidth - padding - 3)}...`;
    }

    rows[rowIndex]?.push(content.padEnd(cellWidth));
  });

  return rows
    .map((row) => { return row.join(''); })
    .join('\n');
};

export { loggerColumn };