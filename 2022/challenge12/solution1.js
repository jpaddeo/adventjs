function selectSleigh(distance, sleighs) {
  const bS = sleighs.filter((s) => s.consumption * distance <= 20).at(-1);
  return bS ? bS.name : null;
}
