import { isNumber } from './helpers';
import { mathOperators, mathOperatorsOneParametr } from './mathOperators';

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(' ');

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      !isNumber(prevItem) && !mathOperatorsOneParametr.hasOwnProperty(prevItem) && isNumber(item);

    const isValidOperatorPush = isNumber(prevItem) && !isNumber(item) && mathOperators.hasOwnProperty(item);

    const isValidOperatorOneParametrPush =
      isNumber(prevItem) && !isNumber(item) && mathOperatorsOneParametr.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if (isValidOperatorOneParametrPush) {
      result.push(item);
    } else if (mathOperatorsOneParametr.hasOwnProperty(prevItem) && mathOperators.hasOwnProperty(item)) {
      result.push(item);
    } else if (mathOperatorsOneParametr.hasOwnProperty(prevItem) && mathOperatorsOneParametr.hasOwnProperty(item)) {
      result.push(item);
    } else {
      throw new TypeError('Unexpected string');
    }
    return result;
  }, []);
};
