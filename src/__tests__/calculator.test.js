import { Calculator } from "../js/calculator.js";

describe("Calculator", () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("Basic Calculator Operations", () => {
        describe("Addition", () => {
            it("Should add two numbers together", () => {
                expect(calculator.add(2, 6)).toBe(8);
            });
            it("Should throw an error with null input", () => {
                expect(() => calculator.add(null, 7)).toThrow("Invalid input");
            });
            it("Should throw an error with String inputs", () => {
                expect(() => calculator.add("5", "6")).toThrow("Invalid input");
            });
            it("Should throw an error with NaN input", () => {
                expect(() => calculator.add(NaN, 4)).toThrow("Invalid input");
            });
        });

        describe("Subtraction", () => {
            it("Should add two numbers together", () => {
                expect(calculator.subtract(12, 6)).toBe(6);
            });
            it("Should throw an error with null input", () => {
                expect(() => calculator.subtract(null, 7)).toThrow("Invalid input");
            });
            it("Should throw an error with String inputs", () => {
                expect(() => calculator.subtract("5", "6")).toThrow("Invalid input");
            });
            it("Should throw an error with NaN input", () => {
                expect(() => calculator.subtract(NaN, 4)).toThrow("Invalid input");
            });
        });

        describe("Multiplication", () => {
            it("Should add two numbers together", () => {
                expect(calculator.multiply(3, 6)).toBe(18);
            });
            it("Should throw an error with null input", () => {
                expect(() => calculator.multiply(null, 7)).toThrow("Invalid input");
            });
            it("Should throw an error with String inputs", () => {
                expect(() => calculator.multiply("5", "6")).toThrow("Invalid input");
            });
            it("Should throw an error with NaN input", () => {
                expect(() => calculator.multiply(NaN, 4)).toThrow("Invalid input");
            });
        });

        describe("Division", () => {
            it("Should add two numbers together", () => {
                expect(calculator.divide(24, 6)).toBe(4);
            });
            it("Should throw an error with null input", () => {
                expect(() => calculator.divide(null, 7)).toThrow("Invalid input");
            });
            it("Should throw an error with String inputs", () => {
                expect(() => calculator.divide("5", "6")).toThrow("Invalid input");
            });
            it("Should throw an error with NaN input", () => {
                expect(() => calculator.divide(NaN, 4)).toThrow("Invalid input");
            });
        });
    });

    describe("Operand and Operator handling", () => {
        it("Should throw when operator is not supported", () => {
            calculator.addOperand("5");
            expect(() => calculator.addOperator("DOES NOT EXIST")).toThrow(Error);
        });

        it("Should display the default value when clicked", () => {
            expect(calculator.calculate()).toBe("0");
        });

        it("Should display the number that was clicked", () => {
            calculator.addOperand("4");
            calculator.addOperand("6");
            calculator.addOperand("0");
            expect(calculator.calculate()).toBe("460");
        });

        it("Should add an operator and return the first operand", () => {
            calculator.addOperand(5);
            expect(calculator.addOperator("ADDITION")).toBe("5");
        });

        it("Should operate with self", () => {
            calculator.addOperand("5");
            calculator.addOperator("MULTIPLICATION");
            expect(calculator.calculate()).toBe("25");
        });

        it("Should calculate the result when adding an operator after two or more operands", () => {
            calculator.addOperand(3);
            calculator.addOperator("MULTIPLICATION");
            calculator.addOperand(7);
            expect(calculator.addOperator("ADDITION")).toBe("21");
        });

        it("Should reset display after an operator", () => {
            calculator.addOperand("4");
            calculator.addOperator("MULTIPLICATION");
            expect(calculator.addOperand("5")).toBe("5");
        });

        it("Should perform a calculation", () => {
            calculator.addOperand("25");
            calculator.addOperator("DIVISION");
            calculator.addOperand("2");
            expect(calculator.calculate()).toBe("12.5");
        });

        it("Should reset after an equal sign", () => {
            calculator.addOperand("5");
            calculator.addOperator("MULTIPLICATION");
            calculator.addOperand("14");
            calculator.calculate();
            expect(calculator.addOperand("4")).toBe("4");
        });

        it("Should repeat calculatin with multiple equal clicks", () => {
            calculator.addOperand("4");
            calculator.addOperator("MULTIPLICATION");
            calculator.addOperand("2");
            calculator.calculate();
            calculator.calculate();
            expect(calculator.calculate()).toBe("32");
        });
    });
});
