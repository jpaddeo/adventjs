# Instructions

The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string movements where each character represents the direction of the reindeer's movement:

- > = Moves to the right
- < = Moves to the left
- * = Can move forward or backward

For example, if the movement is >>*<, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is after completing all movements.

In the previous example, the maximum distance the reindeer travels is 2. It goes to the right twice +2, then with the * it can go to the right again to maximize the distance +1 and then it goes to the left -1.

Create a maxDistance function that takes the text string movements and returns the maximum distance that the reindeer can travel in any direction:

```js
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
Keep in mind that it doesn't matter whether it is to the left or right, the distance is the absolute value of the maximum distance traveled at the end of the movements.
```

# Solutions

## Alternative I (380 points)

```js
function maxDistance(movements) {
    const MOVEMENTS_MAP = {
      '>': 1,
      '<': -1
    }
  
    let movementsCount = 0
    let wildcardCount= 0
    for(const movement of movements) {
      movement !== '*' ? 
        movementsCount += MOVEMENTS_MAP[movement] : 
        wildcardCount++
    }
    return Math.abs(movementsCount) + wildcardCount
  }
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge06/solution1.js)