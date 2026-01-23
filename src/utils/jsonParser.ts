import { parse, stringify } from 'JSON';

/**
 * Utility functions for parsing and stringifying JSON data.
 */
export class JsonParser {
    /**
     * Parses a JSON string into an object.
     * 
     * @param jsonString - The JSON string to parse.
     * @returns The parsed object or null if parsing fails.
     * @throws Will throw an error if the input is not a string.
     */
    public static parseJson(jsonString: string): object | null {
        if (typeof jsonString !== 'string') {
            throw new Error('Input must be a string');
        }

        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            return null;
        }
    }

    /**
     * Stringifies an object into a JSON string.
     * 
     * @param obj - The object to stringify.
     * @returns The JSON string representation of the object or null if stringifying fails.
     * @throws Will throw an error if the input is not an object.
     */
    public static stringifyJson(obj: object): string | null {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('Input must be a non-null object');
        }

        try {
            return JSON.stringify(obj);
        } catch (error) {
            console.error('Failed to stringify JSON:', error);
            return null;
        }
    }
}