import { Calculator } from "./calculator.js";

export function setupEvents() {
    const myCalc = new Calculator();
    const operands = document.querySelectorAll("[data-id='operand']");
    const operators = document.querySelectorAll("[data-id='operator']");
    const equalElm = document.querySelector("[data-id='equals']");

    operands.forEach(elm => {
        elm.addEventListener("click", function (e) {
            const value = e.currentTarget.dataset.value;

            myCalc.addOperand(value);
            updateDisplay(value);
        });
    });

    operators.forEach(elm => {
        elm.addEventListener("click", function (e) {
            const value = e.currentTarget.dataset.value;

            myCalc.addOperator(value);
        });
    });

    equalElm?.addEventListener("click", function (e) {
        const result = myCalc.calculate();
        updateDisplay(result);
    });
}

function updateDisplay(value) {
    const display = document.querySelector("[data-id='output']");

    display.textContent = value;
}
