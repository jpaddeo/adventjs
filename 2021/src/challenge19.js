export default function learn(time, courses) {
  const possiblesCourses = courses.filter((course) => course < time);
  if (possiblesCourses.length < 2) return null;

  let minDiff = Number.MAX_SAFE_INTEGER;
  let minDiffIndices = [];
  for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < courses.length; j++) {
      if (i === j) continue;
      const difference = time - (courses[i] + courses[j]);
      if (difference === 0) return [i, j];
      if (difference > 0 && minDiff > difference) {
        minDiffIndices = [i, j];
        minDiff = difference;
      }
    }
  }
  return minDiffIndices;
}
