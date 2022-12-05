function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce(
      (mWeight, reindeer) => (mWeight += reindeer.length * 2),
      0
    ) / packOfGifts.reduce((weight, gift) => (weight += gift.length), 0)
  );
}
