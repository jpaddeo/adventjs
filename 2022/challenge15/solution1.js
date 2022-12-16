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
  const treeDecorated = [base];
  base = base.split(' ');
  while (base.length > 1) {
    base = base
      .slice(1)
      .map((ornament, idx) => ORNAMENTS_RULES[base[idx] + ornament]);
    treeDecorated.unshift(base.join(' '));
  }
  return treeDecorated;
}
