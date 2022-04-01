import { capitalize, reverseString, calculate } from "./index.js";

test('Capitalize letter', () => {
    expect(capitalize("a")).toMatch(/A/);
});

test('Capitalize sentence', () => {
    expect(capitalize("there's a river")).toMatch(/There's a river/);
});

test('Reverse word', () => {
    expect(reverseString("bobby")).toMatch(/ybbob/);
});

test('Reverse setence', () => {
    expect(reverseString("In the golden age.")).toMatch(/.ega nedlog eht nI/);
});

test('Add numbers', () => {
    expect(calculate.add(2, 5)).toBe(7);
});

test('Minus numbers', () => {
    expect(calculate.sub(221, 325)).toBe(-104);
});

test('Multiply numbers', () => {
    expect(calculate.mul(5, 6)).toBe(30);
});

test('Divide numbers', () => {
    expect(calculate.div(9, 3)).toBe(3);
});

test('Less than 2 arguments', () => {
    expect(() => { calculate.div(5) }).toThrowError();
});