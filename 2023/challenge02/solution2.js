function manufacture(gifts, materials) {
  const materialsArr = materials.split('')
  const posibleGifts = []
  for (const gift of gifts) {
    let allIncluded = true
    for (const giftLetter of gift) {
      allIncluded = allIncluded && materialsArr.includes(giftLetter)
    }
    if (allIncluded) {
      posibleGifts.push(gift)
    }
  }
  return posibleGifts
}
