export default function pangram(letter) {
  const abc = new Set('abcdefghijklmnñopqrstuvwxyz');
  for (let c of letter.toLowerCase()) {
    abc.delete(c);
    if (abc.size === 0) return true;
  }
  return false;
}
