function createChristmasTree(ornaments, height) {
  let tree = ''
  let treeElements = 0

  for (let row = 0; row < height; row++) {
    const rowElements = Array.from(
      { length: row + 1 },
      () => ornaments[treeElements++ % ornaments.length]
    )
    tree += `${rowElements.join(' ').padStart(height + row)}\n`
  }
  tree += `${'|'.padStart(height)}\n`
  return tree
}
