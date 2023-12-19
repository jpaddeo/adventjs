function maxDistance(movements) {
  const MOVEMENTS_MAP = {
    '>': 1,
    '<': -1,
  };

  let movementsCount = 0;
  let wildcardCount = 0;
  for (const movement of movements) {
    movement !== '*'
      ? (movementsCount += MOVEMENTS_MAP[movement])
      : wildcardCount++;
  }
  return Math.abs(movementsCount) + wildcardCount;
}
