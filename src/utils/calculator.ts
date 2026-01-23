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

/**
 * Calculates the modulus of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The modulus of the two numbers.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
export function modulus(a: number, b: number): number {
    validateNumbers(a, b);
    return a % b;
}

/**
 * Raises a number to the power of another number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of raising the base to the exponent.
 * @throws {Error} Throws an error if inputs are not numbers.
 */
export function power(base: number, exponent: number): number {
    validateNumbers(base, exponent);
    return Math.pow(base, exponent);
}

/**
 * Supported operation types.
 */
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'modulus' | 'power';

/**
 * Performs a calculation based on the given operation.
 * @param {Operation} operation - The operation to perform.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The result of the calculation.
 * @throws {Error} Throws an error if the operation is not supported.
 */
export function calculate(operation: Operation, a: number, b: number): number {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'modulus':
            return modulus(a, b);
        case 'power':
            return power(a, b);
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }
}

/**
 * Calculates the square root of a number.
 * @param {number} a - The number to calculate the square root of.
 * @returns {number} The square root of the input number.
 * @throws {Error} Throws an error if the input is not a non-negative number.
 */
export function squareRoot(a: number): number {
    if (typeof a !== 'number' || a < 0) {
        throw new Error("Input must be a non-negative number.");
    }
    return Math.sqrt(a);
}

/**
 * Calculates the absolute value of a number.
 * @param {number} a - The number to calculate the absolute value of.
 * @returns {number} The absolute value of the input number.
 * @throws {Error} Throws an error if the input is not a number.
 */
export function absoluteValue(a: number): number {
    if (typeof a !== 'number') {
        throw new Error("Input must be a number.");
    }
    return Math.abs(a);
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} a - The number to round.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} The rounded number.
 * @throws {Error} Throws an error if inputs are not valid numbers.
 */
export function round(a: number, decimalPlaces: number): number {
    validateNumbers(a, decimalPlaces);
    if (!Number.isInteger(decimalPlaces) || decimalPlaces < 0) {
        throw new Error("Decimal places must be a non-negative integer.");
    }
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(a * factor) / factor;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The non-negative integer to calculate the factorial of.
 * @returns {number} The factorial of the input number.
 * @throws {Error} Throws an error if the input is not a non-negative integer.
 */
export function factorial(n: number): number {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} x - The number to calculate the logarithm of.
 * @param {number} base - The base of the logarithm (default is Math.E for natural logarithm).
 * @returns {number} The logarithm of x with the specified base.
 * @throws {Error} Throws an error if inputs are not valid positive numbers.
 */
export function logarithm(x: number, base: number = Math.E): number {
    validateNumbers(x, base);
    if (x <= 0 || base <= 0 || base === 1) {
        throw new Error("Both x and base must be positive numbers, and base cannot be 1.");
    }
    return Math.log(x) / Math.log(base);
}