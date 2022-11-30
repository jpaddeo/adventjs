import { describe, expect, it } from 'vitest';

import { decodeNumber } from '../src/challenge16';

describe('challenge16', () => {
  it('debe devolver 3 si la cadena recibida es ...', () => {
    expect(decodeNumber('...')).toBe(3);
  });
  it('debe devolver 4 si la cadena recibida es .,', () => {
    expect(decodeNumber('.,')).toBe(4);
  });
  it('debe devolver 6 si la cadena recibida es ,.', () => {
    expect(decodeNumber(',.')).toBe(6);
  });
  it('debe devolver NaN si no existe el mapeo', () => {
    expect(decodeNumber(';.W')).toBe(NaN);
  });
});
