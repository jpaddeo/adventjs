function manufacture(gifts, materials) {
  const materialsArr = materials.split('')
  const posibleGifts = []
  for (const gift of gifts) {
    const giftLetters = gift.split('')
    if (giftLetters.every((giftLetter) => materialsArr.includes(giftLetter))) {
      posibleGifts.push(gift)
    }
  }
  return posibleGifts
}
