import { describe, expect, it } from 'vitest';

import { countPackages } from '../src/challenge17';

describe('challenge17', () => {
  it('debe devolver 9 si la key recibida es dapelu', () => {
    expect(
      countPackages(
        [
          ['dapelu', 5, ['midu', 'jelowing']],
          ['midu', 2, []],
          ['jelowing', 2, []],
        ],
        'dapelu'
      )
    ).toBe(9);
  });

  it('debe devolver 15 si la key recibida es camila', () => {
    expect(
      countPackages(
        [
          ['lolivier', 8, ['camila', 'jesuspoleo']],
          ['camila', 5, ['sergiomartinez', 'conchaasensio']],
          ['jesuspoleo', 4, []],
          ['sergiomartinez', 4, []],
          ['conchaasensio', 3, ['facundocapua', 'faviola']],
          ['facundocapua', 2, []],
          ['faviola', 1, []],
        ],
        'camila'
      )
    ).toBe(15);
  });
});
