import { capitalize, reverseString, calculate, caesar, analyzeArray } from "./index.js";

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

test('Caesar word', () => {
    expect(caesar("incandescent", 3)).toMatch(/lqfdqghvfhqw/);
});

test('Caesar word with wrapping', () => {
    expect(caesar("azazadfwe", 10)).toMatch(/kjkjknpgo/);
});

test('Caesar word with punctuation', () => {
    expect(caesar("there's a river.!", 10)).toMatch(/drobo'c k bsfob.!/);
});

test('Analyse array length', () => {
    expect(analyzeArray([1, 9, 4, 5])).toEqual({"average": 4.75 ,"min": 1, "max": 9, "length": 4});
});
