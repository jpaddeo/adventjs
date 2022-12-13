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
