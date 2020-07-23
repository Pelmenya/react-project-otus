export type ScalarOperationType = (first: number, second: number) => number;

export type ScalarOperationTypeOneParametr = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const qrt: ScalarOperationTypeOneParametr = (first: number): number =>
  first * first;

export const factorial: ScalarOperationTypeOneParametr = (
  first: number
): number => {
  if (first > 1) {
    return first * factorial(first - 1);
  } else return 1;
};

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => {
  let result: number = first;

  if (second === 0) return 1;
  if (first === 1) return 1;
  if (second === 2) return qrt(first);
  for (let i = 0; i < second - 1; i += 1) {
    result = result * first;
  }
  return result;
}; // Или так Math.pow(first, second);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "^": pow,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathOperatorsOneParametr: {
  [key: string]: ScalarOperationTypeOneParametr;
} = {
  "**": qrt,
  "!": factorial,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": FIRST,
  "^": FIRST,
  "**": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};
