export type SumProps = number;

export const sum = (numbers: SumProps[]) =>
  numbers.reduce((total, number) => total + number, 0);

export const plus = (a: number, b: number) => a + b;

export const minus = (a: number, b: number) => a - b;

export const multiplication = (a: number, b: number) => a * b;

export const division = (a: number, b: number) => a / b;

const calc = { division, minus, multiplication, plus, sum };

export default calc;
