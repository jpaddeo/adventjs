function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities = giftsCities
    .sort((x, y) => y - x)
    .reduce((result, _, idx) => {
      if (idx) giftsCities.unshift(giftsCities.pop());

      idx = giftsCities
        .slice(0, maxCities)
        .reduce((acc, curr) => (acc += curr), 0);
        idx <= maxGifts && result.push(idx);

        idx - giftsCities[maxCities - 1] <= maxGifts &&
        result.push(idx - giftsCities[maxCities - 1]);
      return result;
    }, []);
  return Math.max(...(giftsCities.length ? giftsCities : [0]));
}
