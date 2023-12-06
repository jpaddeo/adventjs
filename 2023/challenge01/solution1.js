function findFirstRepeated(gifts) {
  let giftsSet = new Set()
  for (const gift of gifts) {
    if (giftsSet.has(gift)) {
      return gift
    } else {
      giftsSet.add(gift)
    }
  }
  return -1
}
