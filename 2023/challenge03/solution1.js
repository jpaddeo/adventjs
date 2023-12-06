function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return ''

  const largerCount = Math.max(original.length, modified.length)

  for (let idx = 0; idx < largerCount; idx++) {
    if (original[idx] !== modified[idx])
      return modified.length > original.length ? modified[idx] : original[idx]
  }
}
