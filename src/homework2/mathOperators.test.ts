import { mul, div, add, minus, qrt, pow, factorial } from './mathOperators';

describe('mathOperators test cases', () => {
  it('factorial 0 to equal 1', () => {
    expect(factorial(0)).toBe(1);
  });

  it('factorial 1 to equal 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('factorial 2 to equal 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('factorial 3 to equal 6', () => {
    expect(factorial(3)).toBe(6);
  });

  it('factorial 9 to equal 362800', () => {
    expect(factorial(9)).toBe(362880);
  });

  it('pow 0 ^ 0 to equal 1', () => {
    expect(pow(0, 0)).toBe(1);
  });

  it('pow 253 ^ 0 to equal 1', () => {
    expect(pow(253, 0)).toBe(1);
  });

  it('pow 1 ^ 1 to equal 1', () => {
    expect(pow(1, 1)).toBe(1);
  });

  it('pow 1 ^ 322 to equal 1', () => {
    expect(pow(1, 322)).toBe(1);
  });

  it('pow 2 ^ 2 to equal 4', () => {
    expect(pow(2, 2)).toBe(4);
  });

  it('pow 8 ^ 9 to equal 134217728', () => {
    expect(pow(8, 9)).toBe(134217728);
  });

  it('pow 2 ^ 64 to equal 16384', () => {
    expect(pow(2, 14)).toBe(16384);
  });

  it('pow 2 ^ 5 to equal 32', () => {
    expect(pow(2, 5)).toBe(32);
  });

  it('qrt 1 ** to equal 1', () => {
    expect(qrt(1)).toBe(1);
  });

  it('qrt 2 ** to equal 4', () => {
    expect(qrt(2)).toBe(4);
  });

  it('qrt 253 ** to equal 64009', () => {
    expect(qrt(253)).toBe(64009);
  });

  it('qrt 4 ** to equal 16', () => {
    expect(qrt(4)).toBe(16);
  });

  it('qrt 1 ** to equal 1', () => {
    expect(qrt(1)).toBe(1);
  });

  it('mul 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2);
  });

  it('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4);
  });

  it('div 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1);
  });

  it('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
  });

  it('add 4 + 2 to equal 6', () => {
    expect(add(4, 2)).toBe(6);
  });

  it('minus 4 - 2 to equal 2', () => {
    expect(minus(4, 2)).toBe(2);
  });
});
