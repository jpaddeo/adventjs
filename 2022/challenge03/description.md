# Description

You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. _Each gift inside the pack is represented by a string_ and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a _weight limit_.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a _maximum weight limit_ that it can carry. The maximum weight limit of each reindeer is _equal to twice the number of letters in its name_.

Your task is to implement a `function distributeGifts(packOfGifts, reindeers)` that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. _You can't split gifts packs_.

```js
const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers); // 2
```

Things to keep in mind:

- The gifts pack can't be splitted.
- Gifts and reindeers' names length will always be greater than 0.

# Solutions

## Alternative I

```js
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce(
      (mWeight, reindeer) => (mWeight += reindeer.length * 2),
      0
    ) / packOfGifts.reduce((weight, gift) => (weight += gift.length), 0)
  );
}
```
[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge03/solution1.js)
