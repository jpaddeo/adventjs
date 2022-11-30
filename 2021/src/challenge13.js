export default function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  const giftWrapped = gifts.map((regalo) => `*${regalo}*`);
  const wrapper = '*'.repeat(gifts[0].length + 2);
  return [wrapper, ...giftWrapped, wrapper];
}
