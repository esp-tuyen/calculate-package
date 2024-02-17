export type SumProps = number;

const sum = (numbers: SumProps[]) =>
  numbers.reduce((total, number) => total + number, 0);

const plus = (a: number, b: number) => a + b;

const minus = (a: number, b: number) => a - b;

const multiplication = (a: number, b: number) => a * b;

const division = (a: number, b: number) => a / b;

export { division, minus, multiplication, plus, sum };
