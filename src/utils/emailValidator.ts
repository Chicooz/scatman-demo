import { isEmpty } from 'lodash';

/**
 * Validates an email address using a regular expression.
 * 
 * @param {string | null | undefined} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 * @throws {Error} - Throws an error if the input is not a string or is empty.
 */
export function validateEmail(email: string | null | undefined): boolean {
    // Check for null or undefined input
    if (email === null || email === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check for empty string
    if (isEmpty(email)) {
        throw new Error('Input cannot be an empty string');
    }

    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    return emailRegex.test(email);
}