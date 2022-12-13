function checkJump(heights) {
  const hA = heights
    .slice(0, -1)
    .findIndex((el, idx) => heights[idx + 1] - el < 0);
  const hB = heights
    .reverse()
    .slice(0, -1)
    .findIndex((el, idx) => heights[idx + 1] - el < 0);
  const mH = Math.max(...heights.slice(hA, hB + 1));
  return mH === heights[hA] || hA === heights.length - 1 - hB;
}
