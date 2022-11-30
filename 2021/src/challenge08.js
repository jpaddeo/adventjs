export default function maxProfit(prices) {
  let [min, max] = [Math.max(...prices), 0];
  for (let i = 0; i < prices.length; i++) {
    [min, max] = [Math.min(min, prices[i]), Math.max(max, prices[i] - min)];
  }
  return max > 0 ? max : -1;
}
