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
