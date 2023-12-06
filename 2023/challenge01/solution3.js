function findFirstRepeated(gifts) {
  let giftsArr = []
  for (const gift of gifts) {
    if (giftsArr.includes(gift)) return gift
    giftsArr.push(gift)
  }
  return -1
}