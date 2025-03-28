import { setupEvents } from "../js/app.js";

describe("Calculator Integration Tests", () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <button data-value="4" data-id="operand">4</button>
        <button data-value="7" data-id="operand">7</button>
        <button data-value="ADDITION" data-id="operator">+</button>
        <button data-id="equals">=</button>
        <div data-id="output"></div>
        <button data-id="clear">C</button>
        `;
        setupEvents();
    });
    it("Should display the number when clicked", () => {
        const button4 = document.querySelector("[data-value='4']");
        const button7 = document.querySelector("[data-value='7']");
        const output = document.querySelector("[data-id='output']");
        button4.click();
        expect(output.textContent).toBe("4");
        button7.click();
        button7.click();
        expect(output.textContent).toBe("477");
    });

    it("Should display the second number after an operator", () => {
        const button7 = document.querySelector("[data-value='7']");
        const output = document.querySelector("[data-id='output']");
        const button4 = document.querySelector("[data-value='4']");
        const addButton = document.querySelector("[data-value='ADDITION']");

        button7.click();
        addButton.click();
        button4.click();

        expect(output.textContent).toBe("4");
    });

    it("Should add two numbers and update the display", () => {
        const button4 = document.querySelector("[data-value='4']");
        const button7 = document.querySelector("[data-value='7']");
        const addButton = document.querySelector("[data-value='ADDITION']");
        const equalButton = document.querySelector("[data-id='equals']");
        const result = document.querySelector("[data-id='output']");

        button4.click();
        addButton.click();
        button7.click();
        equalButton.click();

        expect(result.textContent).toBe("11");
    });

    it("Should add new numbers after an operation", () => {
        const button4 = document.querySelector("[data-value='4']");
        const button7 = document.querySelector("[data-value='7']");
        const addButton = document.querySelector("[data-value='ADDITION']");
        const equalButton = document.querySelector("[data-id='equals']");
        const result = document.querySelector("[data-id='output']");

        button4.click();
        addButton.click();
        button7.click();
        equalButton.click();
        addButton.click();
        button4.click();
        equalButton.click();

        expect(result.textContent).toBe("15");
    });

    it("Should clear the page when clicked", () => {
        const button4 = document.querySelector("[data-value='4']");
        const button7 = document.querySelector("[data-value='7']");
        const addButton = document.querySelector("[data-value='ADDITION']");
        const equalButton = document.querySelector("[data-id='equals']");
        const result = document.querySelector("[data-id='output']");
        const clearButton = document.querySelector("[data-id='clear']");

        button4.click();
        addButton.click();
        button7.click();
        equalButton.click();
        clearButton.click();

        expect(result.textContent).toBe("0");
        equalButton.click();
        expect(result.textContent).toBe("0");
    });
});
