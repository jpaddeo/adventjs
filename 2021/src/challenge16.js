export const decodeNumber = (symbols) => {
  const SYMBOLS_MAP = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };

  const symbolsArr = symbols.split('');
  let symbolsSum = 0;
  symbolsArr.forEach((symbol, index) => {
    if (
      symbolsArr[index + 1] &&
      SYMBOLS_MAP[symbol] < SYMBOLS_MAP[symbolsArr[index + 1]]
    ) {
      symbolsSum -= SYMBOLS_MAP[symbol];
    } else {
      symbolsSum += SYMBOLS_MAP[symbol];
    }
  });
  return symbolsSum;
};
