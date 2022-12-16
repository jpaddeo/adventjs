function decorateTree(base) {
  const ORNAMENTS_RULES = {
    BB: 'B',
    RR: 'R',
    PP: 'P',
    BP: 'R',
    RP: 'B',
    BR: 'P',
    PB: 'R',
    PR: 'B',
    RB: 'P',
  };

  const splittedBase = base.split(' ');

  const addOrnament = (ornaments, curOrnament, curIndex, original) => {
    const nOrnament = original[curIndex + 1];
    ornaments.push(ORNAMENTS_RULES[curOrnament + nOrnament]);
    return ornaments;
  };

  const createOrnaments = (treeOrnamented, curValue, curIndex) => {
    const nOrnamentLine = treeOrnamented[curIndex]
      .reduce(addOrnament, [])
      .filter(Boolean);

    treeOrnamented.push(nOrnamentLine);

    return treeOrnamented;
  };

  return [...Array(splittedBase.length - 1)]
    .reduce(createOrnaments, [splittedBase])
    .reverse()
    .map((ornaments) => ornaments.join(' '));
}
