export default function getCoins(change) {
  const COINS = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
  };
  Object.keys(COINS)
    .reverse()
    .forEach((key) => {
      while (change >= +key) {
        change = change - +key;
        COINS[key]++;
      }
    });
  return Object.values(COINS);
}
