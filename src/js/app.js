import { Calculator } from "./calculator.js";

export function setupEvents() {
    const myCalc = new Calculator();
    const operands = document.querySelectorAll("[data-id='operand']");
    const operators = document.querySelectorAll("[data-id='operator']");
    const equalElm = document.querySelector("[data-id='equals']");
    const clearElm = document.querySelector("[data-id='clear']");
    const squareRootElm = document.querySelector("[data-id='square_root']");
    const deleteElm = document.querySelector("[data-id='delete']");

    operands.forEach(elm => {
        elm.addEventListener("click", function (e) {
            const value = e.currentTarget.dataset.value;

            const number = myCalc.addOperand(value);
            updateDisplay(number);
        });
    });

    operators.forEach(elm => {
        elm.addEventListener("click", function (e) {
            const value = e.currentTarget.dataset.value;

            const num = myCalc.addOperator(value);
            updateDisplay(num);
        });
    });

    equalElm?.addEventListener("click", function (e) {
        const result = myCalc.calculate();
        updateDisplay(result);
    });

    clearElm?.addEventListener("click", function (e) {
        const result = myCalc.clear();
        updateDisplay(result);
    });

    squareRootElm?.addEventListener("click", function (e) {
        const result = myCalc.squareRoot();
        updateDisplay(result);
    });

    deleteElm?.addEventListener("click", function (e) {
        updateDisplay(myCalc.delete());
    });
}

function updateDisplay(value) {
    const display = document.querySelector("[data-id='output']");

    display.textContent = value;
}
