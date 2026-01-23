// calculator.ts

/**
 * A utility module for basic arithmetic operations.
 * @module calculator
 */

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
export function add(a: number, b: number): number {
    validateNumbers(a, b);
    return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of the subtraction.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
export function subtract(a: number, b: number): number {
    validateNumbers(a, b);
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
export function multiply(a: number, b: number): number {
    validateNumbers(a, b);
    return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if inputs are not numbers or if division by zero is attempted.
 */
export function divide(a: number, b: number): number {
    validateNumbers(a, b);
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

/**
 * Validates that the inputs are numbers.
 * @param {any} a - The first input to validate.
 * @param {any} b - The second input to validate.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
function validateNumbers(a: any, b: any): void {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both inputs must be numbers.");
    }
}