# Description

Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

```js
checkPart('uwu'); // true
// "uwu" is a palindrome without removing any character

checkPart('miidim'); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart('midu'); // false
// "midu" cannot be a palindrome after removing a character
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge08/solution1.js)

# Solutions

## Alternative I

```js
function checkPart(part) {
  const checkPalindrom = (str) => {
    let reverseStr = str.toLowerCase().split('').reverse().join('');
    return reverseStr === str.toLowerCase();
  };
  if (checkPalindrom(part)) return true;
  let multiCheck = false;
  for (let i = 0; i <= part.length; i++) {
    const strToCheck = part.replace(part[i], '');
    multiCheck = multiCheck || checkPalindrom(strToCheck);
  }
  return multiCheck;
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge08/solution1.js)

## Alternative II

```js
function checkPart(part) {
  const checkPalindrom = (_, i, self) => {
    const str = self.filter((_, idx) => idx !== i);
    return str.join('') === str.reverse().join('');
  };
  return part.split('').some(checkPalindrom);
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge08/solution2.js)
