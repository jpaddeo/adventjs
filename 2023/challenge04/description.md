# Instructions

In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

```js
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```

Notes:

- The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
- There should not be any parentheses left in the final message.
- The maximum nesting level is 2.

# Solutions

## Alternative I (270 points)

```js
function decode(message) {
  const inverseStack = []
  let result = ''

  for (let letter of message) {
    if (letter === '(') {
      inverseStack.push(result);
      result = ''
    } else if (letter === ')') {
      result = inverseStack.pop() + result.split('').reverse().join('')
    } else {
      result += letter
    }
  }
  return result
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge04/solution1.js)

## Alternative II (280 points)

```js
function decode(message) {
  const matchParentheses = message.match(/\(([^()]+)\)/)

  if (!matchParentheses) return message

  const sanitizedAndReversed = matchParentheses[0]
    .slice(1, -1)
    .split('')
    .reverse()
    .join('')
  const result = message.replace(matchParentheses[0], sanitizedAndReversed)

  const totalResult = decode(result)

  return totalResult
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge04/solution2.js)
