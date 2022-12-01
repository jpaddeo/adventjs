wrapping = (gifts) => {
  const wrap = (gift) => {
    const w = '*'.repeat(gift.length + 2);
    return [w, `*${gift}*`, w].join('\n');
  };
  return gifts.map(wrap);
};
