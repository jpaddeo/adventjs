import { describe, expect, it } from 'vitest';

import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
  it('debe fallar si no recibe un número como parámetro', () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it('debe retornar 2 si el parámetro recibido es 2', () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  it('debe retornar "Fizz" si el parámetro recibido es múltiplo 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
    expect(fizzbuzz(12)).toBe('Fizz');
    expect(fizzbuzz(21)).toBe('Fizz');
  });
  it('debe retornar "Buzz" si el parámetro recibido es múltiplo 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
    expect(fizzbuzz(50)).toBe('Buzz');
  });
  it('debe retornar "FizzBuzz" si el parámetro recibido es múltiplo 3 y de 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});
