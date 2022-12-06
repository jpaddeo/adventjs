function createCube(size) {
  const cube = [];
  for (let i = 1; i <= size; i++) {
    cube.push(`${' '.repeat(size - i)}${'/\\'.repeat(i)}${'_\\'.repeat(size)}`);
  }
  for (let i = size; i >= 1; i--) {
    cube.push(`${' '.repeat(size - i)}${'\\/'.repeat(i)}${'_/'.repeat(size)}`);
  }
  return cube.join('\n');
}
