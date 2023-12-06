# Instructions

In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

```js
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```

# Solutions

## Alternative I (270 points)

```js
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
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge02/solution1.js)

## Alternative II (270 points)

```js
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
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge02/solution2.js)