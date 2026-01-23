import { isString } from 'lodash';

/**
 * A simple function that returns a greeting message.
 * 
 * @param name - The name of the person to greet. Must be a non-empty string.
 * @returns A greeting message or an error message if the input is invalid.
 * @throws Will throw an error if the input is not a valid string.
 */
export function hello(name: string | null | undefined): string {
    try {
        // Validate input
        if (!isString(name) || name.trim().length === 0) {
            throw new Error('Invalid input: name must be a non-empty string.');
        }

        return `Hello, ${name}!`;
    } catch (error) {
        console.error(error);
        return 'An error occurred while generating the greeting.';
    }
}