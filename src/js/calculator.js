export class Calculator {
    constructor() {
        this.firstOperand = 0;
        this.secondOperand = 0;
        this.operator = "ADDITION";
        this.operations = new Map([
            ["ADDITION", this.add],
            ["SUBTRACTION", this.subtract],
            ["MULTIPLICATION", this.multiply],
            ["DIVISION", this.divide]
        ]);
    }

    addOperand(n) {
        this.secondOperand = Number(n);
    }

    addOperator(operator) {
        this.operator = operator.toUpperCase();
        this.firstOperand = this.secondOperand;
        this.secondOperand = 0;
    }

    calculate() {
        let operation = this.operations.get(this.operator);
        return operation(this.firstOperand, this.secondOperand);
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
