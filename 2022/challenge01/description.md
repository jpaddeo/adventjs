# Instructions

This year the elves have bought a gift wrapping machine. But... it's not programmed! **We need to create an algorithm that helps it in the task**.

The machine receives an array with the gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the `*` symbol and to wrap a gift the `*` symbol is placed so that it completely surrounds the string on all sides. For example:

```js
const gifts = ['book', 'game', 'socks'];
const wrapped = wrapping(gifts);
console.log(wrapped);
/* [
  "*****\n*book*\n*****",
  "*****\n*game*\n*****",
  "******\n*socks*\n******"
] */
```

# Solutions

# Alternative I

```js
wrapping = (gifts) => {
  return gifts.map((gift) => {
    const wrapper = '*'.repeat(gift.length + 2);
    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
}
```
[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge01/solution1.js)

# Alternative II

```js
wrapping = (gifts) => {
  const wrap = (gift) => {
    const w = '*'.repeat(gift.length + 2)
    return [w,`*${gift}*`,w].join('\n')
  }
  return gifts.map(wrap)
}
```
[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge01/solution2.js)