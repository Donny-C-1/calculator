export class Calculator {
    constructor() {
        this.displayValue = "0"; // Current value displayed
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null; // The selected operator (+, -, *, /)
        this.prevOperator = null;
        this.prevOperand = null;
        this.prevResult = null;
        this.waitingForOperand = null;
        this.waitingForSecondOperand = false;
        this.operations = new Map([
            ["ADDITION", this.add],
            ["SUBTRACTION", this.subtract],
            ["MULTIPLICATION", this.multiply],
            ["DIVISION", this.divide]
        ]);
    }

    addOperand(digit) {
        let currentInput = String(digit);
        if (this.waitingForOperand) {
            this.displayValue = currentInput === "." ? "0." : currentInput;
            this.waitingForOperand = false;
        } else {
            this.displayValue = this.displayValue === "0" ? (currentInput === "." ? "0." : currentInput) : this.displayValue + currentInput;
        }
        return this.displayValue;
    }

    addOperator(operator) {
        if (!this.operations.has(operator)) {
            throw new Error(`Invalid operator: ${operator} not supported`);
        }
        if (this.firstOperand && this.operator) {
            this.firstOperand = this.calculate();
        } else {
            this.firstOperand = parseFloat(this.displayValue);
        }
        this.operator = operator;
        this.waitingForOperand = true;
        return this.displayValue;
    }

    calculate() {
        if (this.operator) {
            const operation = this.operations.get(this.operator);
            this.secondOperand = parseFloat(this.displayValue);
            this.displayValue = String(operation(this.firstOperand, parseFloat(this.displayValue)));
            this.prevOperator = this.operator;
            this.operator = null;
            this.waitingForOperand = true;
        } else if (this.waitingForOperand) {
            const operation = this.operations.get(this.prevOperator);
            this.displayValue = String(operation(parseFloat(this.displayValue), this.secondOperand));
        }
        this.firstOperand = null;
        return this.displayValue;
    }

    delete() {
        this.displayValue = this.displayValue.slice(0, -1);
        return this.displayValue;
    }

    clear() {
        this.firstOperand = null;
        this.secondOperand = null;
        this.prevOperand = null;
        this.prevResult = null;
        this.displayValue = "0";
        this.operator = null;
        this.prevOperator = null;
        this.waitingForOperand = false;
        return this.displayValue;
    }

    squareRoot() {
        const input = parseFloat(this.displayValue);
        this.clear();
        this.displayValue = String(Math.sqrt(input));
        return this.displayValue;
    }

    /**
     *
     * @param {Number} numA First number
     * @param {Number} numB Second number
     * @returns numA + numB
     */
    add(numA, numB) {
        if (isNaN(numA) || isNaN(numB) || typeof numA !== "number" || typeof numB !== "number") {
            throw new Error("Invalid input: Both arguments must be valid numbers.");
        }
        return numA + numB;
    }

    /**
     *
     * @param {Number} numA
     * @param {Number} numB
     * @returns numA - numB
     */
    subtract(numA, numB) {
        if (isNaN(numA) || isNaN(numB) || typeof numA !== "number" || typeof numB !== "number") {
            throw new Error("Invalid input: Both arguments must be valid numbers.");
        }
        return numA - numB;
    }

    /**
     *
     * @param {Number} numA First number
     * @param {Number} numB Second Number
     * @returns numA * numB
     */
    multiply(numA, numB) {
        if (isNaN(numA) || isNaN(numB) || typeof numA !== "number" || typeof numB !== "number") {
            throw new Error("Invalid input: Both arguments must be valid numbers.");
        }
        return numA * numB;
    }

    /**
     *
     * @param {Number} numA First number
     * @param {Number} numB Second number
     * @returns numA / numB
     */
    divide(numA, numB) {
        if (isNaN(numA) || isNaN(numB) || typeof numA !== "number" || typeof numB !== "number") {
            throw new Error("Invalid input: Both arguments must be valid numbers.");
        }
        return numA / numB;
    }
}
