import { isEmail, isLength } from 'validator';

/**
 * User validation utilities.
 * @module utils/validator
 */

/**
 * Interface representing a user object.
 */
export interface User {
    username: string;
    email: string;
    password: string;
}

/**
 * Validates the user object.
 * 
 * @param user - The user object to validate.
 * @returns An object containing validation results.
 */
export function validateUser(user: User): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!isLength(user.username, { min: 3, max: 30 })) {
        errors.push('Username must be between 3 and 30 characters long.');
    }

    if (!isEmail(user.email)) {
        errors.push('Email is not valid.');
    }

    if (!isLength(user.password, { min: 6 })) {
        errors.push('Password must be at least 6 characters long.');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

/**
 * Checks if the provided username is valid.
 * 
 * @param username - The username to check.
 * @returns True if the username is valid, otherwise false.
 */
export function isValidUsername(username: string): boolean {
    return isLength(username, { min: 3, max: 30 });
}

/**
 * Checks if the provided email is valid.
 * 
 * @param email - The email to check.
 * @returns True if the email is valid, otherwise false.
 */
export function isValidEmail(email: string): boolean {
    return isEmail(email);
}

/**
 * Checks if the provided password is valid.
 * 
 * @param password - The password to check.
 * @returns True if the password is valid, otherwise false.
 */
export function isValidPassword(password: string): boolean {
    return isLength(password, { min: 6 });
}