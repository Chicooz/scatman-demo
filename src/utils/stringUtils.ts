import { isString } from 'lodash';

/**
 * A utility class for string operations.
 */
export class StringUtils {
  /**
   * Capitalizes the first letter of a given string.
   * @param input - The string to capitalize.
   * @returns The input string with the first letter capitalized, or null if input is not a valid string.
   */
  public static capitalize(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  /**
   * Trims whitespace from both ends of a string.
   * @param input - The string to trim.
   * @returns The trimmed string, or null if input is not a valid string.
   */
  public static trim(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.trim();
  }

  /**
   * Checks if a string is empty or consists only of whitespace.
   * @param input - The string to check.
   * @returns True if the string is empty or whitespace, false otherwise.
   */
  public static isEmpty(input: string | null | undefined): boolean {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return true;
    }
    return input.trim().length === 0;
  }

  /**
   * Repeats a string a specified number of times.
   * @param input - The string to repeat.
   * @param times - The number of times to repeat the string.
   * @returns The repeated string, or null if input is not a valid string or times is not a positive integer.
   */
  public static repeat(input: string | null | undefined, times: number): string | null {
    if (!isString(input) || typeof times !== 'number' || times < 1) {
      console.error('Invalid input: Expected a string and a positive integer for times.');
      return null;
    }
    return input.repeat(times);
  }

  /**
   * Converts a string to lowercase.
   * @param input - The string to convert.
   * @returns The lowercase string, or null if input is not a valid string.
   */
  public static toLowerCase(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.toLowerCase();
  }

  /**
   * Converts a string to uppercase.
   * @param input - The string to convert.
   * @returns The uppercase string, or null if input is not a valid string.
   */
  public static toUpperCase(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.toUpperCase();
  }

  /**
   * Reverses a given string.
   * @param input - The string to reverse.
   * @returns The reversed string, or null if input is not a valid string.
   */
  public static reverse(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.split('').reverse().join('');
  }

  /**
   * Converts a string to title case (capitalizes the first letter of each word).
   * @param input - The string to convert.
   * @returns The title-cased string, or null if input is not a valid string.
   */
  public static toTitleCase(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  /**
   * Truncates a string to a specified length and adds an ellipsis if truncated.
   * @param input - The string to truncate.
   * @param maxLength - The maximum length of the truncated string (including ellipsis).
   * @returns The truncated string, or null if input is not a valid string.
   */
  public static truncate(input: string | null | undefined, maxLength: number): string | null {
    if (!isString(input) || typeof maxLength !== 'number' || maxLength < 1) {
      console.error('Invalid input: Expected a string and a positive integer for maxLength.');
      return null;
    }
    if (input.length <= maxLength) {
      return input;
    }
    return input.slice(0, maxLength - 3) + '...';
  }

  /**
   * Removes all whitespace from a string.
   * @param input - The string to remove whitespace from.
   * @returns The string with all whitespace removed, or null if input is not a valid string.
   */
  public static removeWhitespace(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.replace(/\s/g, '');
  }

  /**
   * Pads a string to a specified length with a given character.
   * @param input - The string to pad.
   * @param length - The desired length of the padded string.
   * @param padChar - The character to use for padding (default is space).
   * @returns The padded string, or null if input is not a valid string.
   */
  public static pad(input: string | null | undefined, length: number, padChar: string = ' '): string | null {
    if (!isString(input) || typeof length !== 'number' || length < 0) {
      console.error('Invalid input: Expected a string and a non-negative integer for length.');
      return null;
    }
    if (padChar.length !== 1) {
      console.error('Invalid padChar: Expected a single character.');
      return null;
    }
    const paddingLength = Math.max(0, length - input.length);
    const padding = padChar.repeat(paddingLength);
    return padding + input;
  }

  /**
   * Counts the occurrences of a substring in a string.
   * @param input - The string to search in.
   * @param substring - The substring to search for.
   * @returns The number of occurrences of the substring, or null if input is not a valid string.
   */
  public static countOccurrences(input: string | null | undefined, substring: string): number | null {
    if (!isString(input) || !isString(substring)) {
      console.error('Invalid input: Expected two strings.');
      return null;
    }
    return (input.match(new RegExp(substring, 'g')) || []).length;
  }

  /**
   * Checks if a string contains only alphabetic characters.
   * @param input - The string to check.
   * @returns True if the string contains only alphabetic characters, false otherwise.
   */
  public static isAlpha(input: string | null | undefined): boolean {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return false;
    }
    return /^[a-zA-Z]+$/.test(input);
  }

  /**
   * Checks if a string contains only alphanumeric characters.
   * @param input - The string to check.
   * @returns True if the string contains only alphanumeric characters, false otherwise.
   */
  public static isAlphanumeric(input: string | null | undefined): boolean {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return false;
    }
    return /^[a-zA-Z0-9]+$/.test(input);
  }

  /**
   * Converts a camelCase string to kebab-case.
   * @param input - The camelCase string to convert.
   * @returns The kebab-case string, or null if input is not a valid string.
   */
  public static camelToKebabCase(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }

  /**
   * Converts a kebab-case string to camelCase.
   * @param input - The kebab-case string to convert.
   * @returns The camelCase string, or null if input is not a valid string.
   */
  public static kebabToCamelCase(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  /**
   * Removes all non-alphanumeric characters from a string.
   * @param input - The string to clean.
   * @returns The cleaned string, or null if input is not a valid string.
   */
  public static removeNonAlphanumeric(input: string | null | undefined): string | null {
    if (!isString(input)) {
      console.error('Invalid input: Expected a string.');
      return null;
    }
    return input.replace(/[^a-zA-Z0-9]/g, '');
  }
}