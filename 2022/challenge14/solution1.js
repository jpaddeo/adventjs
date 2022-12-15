function getOptimalPath(path) {
  return path.reduceRight((prev, curr) =>
    curr.map((v, i) => v + Math.min(prev[i], prev[i + 1]))
  )[0];
}
