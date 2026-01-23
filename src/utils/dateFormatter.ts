FILE: src/utils/dateFormatter.ts
import { format, parseISO } from 'date-fns';

/**
 * Utility for formatting dates.
 */
export class DateFormatter {
    /**
     * Formats a date string or Date object into a specified format.
     * 
     * @param date - The date to format, can be a string or Date object.
     * @param dateFormat - The format string to use for formatting the date.
     * @returns The formatted date string or an error message if the input is invalid.
     * @throws Will throw an error if the date cannot be parsed.
     */
    public static formatDate(date: string | Date | null | undefined, dateFormat: string): string {
        if (!date || !dateFormat) {
            throw new Error('Invalid input: date and dateFormat must be provided.');
        }

        try {
            const parsedDate = typeof date === 'string' ? parseISO(date) : date;
            return format(parsedDate, dateFormat);
        } catch (error) {
            throw new Error(`Error formatting date: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Formats a date to a human-readable string.
     * 
     * @param date - The date to format, can be a string or Date object.
     * @returns The formatted date string.
     */
    public static formatToReadableString(date: string | Date | null | undefined): string {
        if (!date) {
            throw new Error('Invalid input: date must be provided.');
        }

        try {
            const parsedDate = typeof date === 'string' ? parseISO(date) : date;
            return format(parsedDate, 'MMMM dd, yyyy');
        } catch (error) {
            throw new Error(`Error formatting date: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Formats a date to ISO string format.
     * 
     * @param date - The date to format, can be a string or Date object.
     * @returns The formatted date string in ISO format.
     */
    public static formatToISO(date: string | Date | null | undefined): string {
        if (!date) {
            throw new Error('Invalid input: date must be provided.');
        }

        try {
            const parsedDate = typeof date === 'string' ? parseISO(date) : date;
            return parsedDate.toISOString();
        } catch (error) {
            throw new Error(`Error formatting date: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}