function getGiftsToRefill(a1, a2, a3) {
  const stocks = [...new Set([...a1, ...a2, ...a3])];
  return stocks.filter((gift) => {
    return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1;
  });
}
