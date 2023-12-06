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
