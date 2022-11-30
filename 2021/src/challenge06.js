export default function sumPairs(numbers, result) {
  if (!numbers.length) return null;
  const primerNumero = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const suma = primerNumero + numbers[i];
    if (suma === result) return [primerNumero, numbers[i]];
  }
  return sumPairs(numbers.slice(1), result);
}
