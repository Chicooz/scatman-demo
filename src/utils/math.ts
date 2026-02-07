// src/utils/math.ts

/**
 * A collection of mathematical utility functions.
 * @module MathUtils
 */

/**
 * Calculates the factorial of a given non-negative integer.
 * @param {number} n - The non-negative integer to calculate the factorial for.
 * @returns {number} The factorial of the given number.
 * @throws {Error} Throws an error if the input is a negative integer.
 */
export function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm.
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The greatest common divisor of the two integers.
 */
export function gcd(a: number, b: number): number {
    if (b === 0) {
        return Math.abs(a);
    }
    return gcd(b, a % b);
}

/**
 * Calculates the least common multiple (LCM) of two integers.
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The least common multiple of the two integers.
 */
export function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Calculates the power of a base raised to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base to.
 * @returns {number} The result of base raised to the exponent.
 */
export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}