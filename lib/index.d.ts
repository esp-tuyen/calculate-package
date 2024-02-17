export type SumProps = number;
export declare const sum: (numbers: SumProps[]) => number;
export declare const plus: (a: number, b: number) => number;
export declare const minus: (a: number, b: number) => number;
export declare const multiplication: (a: number, b: number) => number;
export declare const division: (a: number, b: number) => number;
declare const calc: {
    division: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
    multiplication: (a: number, b: number) => number;
    plus: (a: number, b: number) => number;
    sum: (numbers: SumProps[]) => number;
};
export default calc;
