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

/**
 * Calculates the sine of an angle (in radians).
 * @param {number} angle - The angle in radians.
 * @returns {number} The sine of the angle.
 * @throws {Error} Throws an error if the input is not a number.
 */
export function sine(angle: number): number {
    if (typeof angle !== 'number') {
        throw new Error("Input must be a number.");
    }
    return Math.sin(angle);
}

/**
 * Calculates the cosine of an angle (in radians).
 * @param {number} angle - The angle in radians.
 * @returns {number} The cosine of the angle.
 * @throws {Error} Throws an error if the input is not a number.
 */
export function cosine(angle: number): number {
    if (typeof angle !== 'number') {
        throw new Error("Input must be a number.");
    }
    return Math.cos(angle);
}

/**
 * Calculates the tangent of an angle (in radians).
 * @param {number} angle - The angle in radians.
 * @returns {number} The tangent of the angle.
 * @throws {Error} Throws an error if the input is not a number.
 */
export function tangent(angle: number): number {
    if (typeof angle !== 'number') {
        throw new Error("Input must be a number.");
    }
    return Math.tan(angle);
}

/**
 * Calculates the average (arithmetic mean) of a list of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The average of the input numbers.
 * @throws {Error} Throws an error if the input is not an array of numbers or if the array is empty.
 */
export function average(numbers: number[]): number {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error("All elements in the array must be numbers.");
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

/**
 * Calculates the median of a list of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The median of the input numbers.
 * @throws {Error} Throws an error if the input is not an array of numbers or if the array is empty.
 */
export function median(numbers: number[]): number {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error("All elements in the array must be numbers.");
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}

/**
 * Calculates the standard deviation of a list of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The standard deviation of the input numbers.
 * @throws {Error} Throws an error if the input is not an array of numbers or if the array is empty.
 */
export function standardDeviation(numbers: number[]): number {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error("All elements in the array must be numbers.");
    }
    const avg = average(numbers);
    const squareDiffs = numbers.map(value => Math.pow(value - avg, 2));
    const avgSquareDiff = average(squareDiffs);
    return Math.sqrt(avgSquareDiff);
}

/**
 * Calculates the percentage of a number relative to another number.
 * @param {number} part - The part value.
 * @param {number} whole - The whole value.
 * @returns {number} The percentage of part relative to whole.
 * @throws {Error} Throws an error if inputs are not valid numbers or if whole is zero.
 */
export function percentage(part: number, whole: number): number {
    validateNumbers(part, whole);
    if (whole === 0) {
        throw new Error("The whole value cannot be zero.");
    }
    return (part / whole) * 100;
}

/**
 * Converts a number from one base to another.
 * @param {string} number - The number to convert as a string.
 * @param {number} fromBase - The base of the input number.
 * @param {number} toBase - The base to convert the number to.
 * @returns {string} The converted number as a string.
 * @throws {Error} Throws an error if inputs are invalid.
 */
export function convertBase(number: string, fromBase: number, toBase: number): string {
    if (typeof number !== 'string' || !Number.isInteger(fromBase) || !Number.isInteger(toBase)) {
        throw new Error("Invalid input types.");
    }
    if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
        throw new Error("Base must be between 2 and 36.");
    }
    const decimal = parseInt(number, fromBase);
    if (isNaN(decimal)) {
        throw new Error("Invalid number for the given base.");
    }
    return decimal.toString(toBase);
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The greatest common divisor of the two numbers.
 * @throws {Error} Throws an error if inputs are not non-negative integers.
 */
export function gcd(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        throw new Error("Inputs must be non-negative integers.");
    }
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The least common multiple of the two numbers.
 * @throws {Error} Throws an error if inputs are not positive integers.
 */
export function lcm(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        throw new Error("Inputs must be positive integers.");
    }
    return Math.abs(a * b) / gcd(a, b);
}