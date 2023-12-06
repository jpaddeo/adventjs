# Instructions 

In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

```js
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

# Solutions

## Alternative I (220 points)

```js
function findFirstRepeated(gifts) {
    let giftsSet = new Set()
    for(const gift of gifts) {
      if(giftsSet.has(gift)) {
        return gift
      } else {
        giftsSet.add(gift)
      }
    }
    return -1
  }
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge01/solution1.js)

## Alternative II (220 points)

```js
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
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge01/solution2.js)

## Alternative II (260 points)

```js
function findFirstRepeated(gifts) {
  let giftsArr = []
  for (const gift of gifts) {
    if (giftsArr.includes(gift)) return gift
    giftsArr.push(gift)
  }
  return -1
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge01/solution3.js)