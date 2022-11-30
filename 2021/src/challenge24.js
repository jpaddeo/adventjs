function countDecorations(bigTree) {
  let decorations = 0;
  if (bigTree) {
    const treeArr = Object.values(bigTree);
    const value = treeArr[0];
    treeArr.slice(1);
    decorations += value;
    decorations += countDecorations(treeArr[1]);
    decorations += countDecorations(treeArr[2]);
  }
  return decorations;
}

export default function checkIsSameTree(treeA, treeB) {
  return countDecorations(treeA) === countDecorations(treeB);
}
