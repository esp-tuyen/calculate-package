"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (numbers) => numbers.reduce((total, number) => total + number, 0);
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
exports.default = { sum, plus, minus, multiplication, division };
