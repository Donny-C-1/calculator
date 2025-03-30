import { setupEvents } from "../js/app.js";

describe("Calculator Integration Tests", () => {
    let numA, numB, addBtn, output, equalBtn, clearBtn;
    beforeEach(() => {
        document.body.innerHTML = `
        <button data-value="4" data-id="operand">4</button>
        <button data-value="7" data-id="operand">7</button>
        <button data-value="ADDITION" data-id="operator">+</button>
        <button data-id="equals">=</button>
        <div data-id="output"></div>
        <button data-id="clear">C</button>
        `;

        numA = document.querySelector("[data-value='4']");
        numB = document.querySelector("[data-value='7']");
        addBtn = document.querySelector("[data-value='ADDITION']");
        output = document.querySelector("[data-id='output']");
        equalBtn = document.querySelector("[data-id='equals']");
        clearBtn = document.querySelector("[data-id='clear']");

        setupEvents();
    });

    it("Should display the number when clicked", () => {
        numA.click();
        expect(output.textContent).toBe("4");

        numB.click();
        numB.click();
        expect(output.textContent).toBe("477");
    });

    it("Should display the second number after an operator", () => {
        numB.click();
        addBtn.click();
        numA.click();

        expect(output.textContent).toBe("4");
    });

    it("Should add two numbers and update the display", () => {
        numA.click();
        addBtn.click();
        numB.click();
        equalBtn.click();

        expect(output.textContent).toBe("11");
    });

    it("Should add new numbers after an operation", () => {
        numA.click();
        addBtn.click();
        numB.click();
        equalBtn.click();
        addBtn.click();
        numA.click();
        equalBtn.click();

        expect(output.textContent).toBe("15");
    });

    it("Should clear the page when clicked", () => {
        numA.click();
        addBtn.click();
        numB.click();
        equalBtn.click();
        clearBtn.click();

        expect(output.textContent).toBe("0");
        equalBtn.click();
        expect(output.textContent).toBe("0");
    });
});
