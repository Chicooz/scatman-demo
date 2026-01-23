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
}