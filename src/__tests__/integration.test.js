import { setupEvents } from "../js/app.js";

describe("Calculator Integration Tests", () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <button data-value="4" data-id="operand">4</button>
        <button data-value="7" data-id="operand">7</button>
        <button data-value="ADDITION" data-id="operator">+</button>
        <button data-id="equals">=</button>
        <div data-id="output"></div>
        `;
        setupEvents();
    });
    it("Should display the number when clicked", () => {
        const button4 = document.querySelector("[data-value='4']");
        const output = document.querySelector("[data-id='output']");
        button4.click();
        expect(output.textContent).toBe("4");
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
});
