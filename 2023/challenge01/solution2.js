function findFirstRepeated(gifts) {
  let giftsSet = {}
  for (const gift of gifts) {
    if (giftsSet[gift]) {
      return gift
    } else {
      giftsSet[gift] = 1
    }
  }
  return -1
}
