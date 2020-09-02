const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }

  const blankIndex = line.lastIndexOf(' ', maxLen);
  let split, offset;
  if (blankIndex > -1) {
    split = blankIndex;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);
};
module.exports = wrap;
