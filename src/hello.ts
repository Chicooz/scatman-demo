/**
 * A utility module for greeting functions.
 * @module hello
 */

/**
 * Greets a user with a personalized message.
 * 
 * @param {string} name - The name of the user to greet.
 * @returns {string} A greeting message.
 * 
 * @example
 * const greeting = greet('Alice');
 * console.log(greeting); // "Hello, Alice!"
 */
export function greet(name: string): string {
    return `Hello, ${name}!`;
}

/**
 * Greets a group of users with a personalized message.
 * 
 * @param {string[]} names - An array of names to greet.
 * @returns {string[]} An array of greeting messages.
 * 
 * @example
 * const greetings = greetMultiple(['Alice', 'Bob']);
 * console.log(greetings); // ["Hello, Alice!", "Hello, Bob!"]
 */
export function greetMultiple(names: string[]): string[] {
    return names.map(name => greet(name));
}