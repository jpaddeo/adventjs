export const fizzbuzz = (num) => {
  if (typeof num !== 'number') throw new Error();
  if (Number.isNaN(num)) throw new Error();

  const multiplies = { 3: 'Fizz', 5: 'Buzz' };
  let output = '';

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (num % multiplier === 0) output += word;
  });

  return output === '' ? num : output;
};
