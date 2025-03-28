import { Calculator } from "../js/calculator.js";

describe("Basic Calculator Operations", () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });
    test("Addition", () => {
        expect(calculator.add(2, 6)).toBe(8);
        expect(() => calculator.add(null, 5)).toThrow("Invalid input");
        expect(() => calculator.add(7, "boy")).toThrow("Invalid input");
        expect(() => calculator.add("7", "5")).toThrow("Invalid input");
    });

    test("Subtraction", () => {
        expect(calculator.subtract(9, 4)).toBe(5);
        expect(calculator.subtract(5, 14)).toBe(-9);
        expect(() => calculator.subtract("5", "2")).toThrow("Invalid input");
        expect(() => calculator.subtract(NaN, NaN)).toThrow("Invalid input");
    });

    test("Multiplication", () => {
        expect(calculator.multiply(4, 5)).toBe(20);
        expect(() => calculator.multiply("5", "2")).toThrow("Invalid input");
        expect(() => calculator.multiply(NaN, NaN)).toThrow("Invalid input");
    });

    test("Division", () => {
        expect(calculator.divide(10, 2)).toBe(5);
        expect(() => calculator.divide("5", "2")).toThrow("Invalid input");
        expect(() => calculator.divide(NaN, NaN)).toThrow("Invalid input");
    });

    test("Add an operand", () => {
        calculator.addOperand(2);
        let number = calculator.addOperand(7);
        expect(number).toBe("27");
        calculator.addOperand("4");
        calculator.addOperand("5");
        number = calculator.addOperand("6");
        expect(number).toBe("27456");
    });
});
