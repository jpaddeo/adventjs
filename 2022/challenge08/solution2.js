function checkPart(part) {
  const checkPalindrom = (_, i, self) => {
    const str = self.filter((_, idx) => idx !== i);
    return str.join('') === str.reverse().join('');
  };
  return part.split('').some(checkPalindrom);
}
