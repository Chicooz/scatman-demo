import { setTimeout } from 'timers/promises';

/**
 * A simple cache utility class that stores key-value pairs with expiration.
 */
export class Cache<T> {
    private cache: Map<string, { value: T; expiry: number }> = new Map();

    /**
     * Sets a value in the cache with an optional expiration time.
     * 
     * @param key - The key under which the value is stored.
     * @param value - The value to be stored in the cache.
     * @param ttl - The time-to-live for the cached value in milliseconds.
     */
    public set(key: string, value: T, ttl?: number): void {
        const expiry = ttl ? Date.now() + ttl : Infinity;
        this.cache.set(key, { value, expiry });
    }

    /**
     * Retrieves a value from the cache.
     * 
     * @param key - The key of the value to retrieve.
     * @returns The cached value or undefined if it does not exist or has expired.
     */
    public get(key: string): T | undefined {
        const cachedItem = this.cache.get(key);
        if (!cachedItem) {
            return undefined;
        }

        if (cachedItem.expiry < Date.now()) {
            this.cache.delete(key);
            return undefined;
        }

        return cachedItem.value;
    }

    /**
     * Deletes a value from the cache.
     * 
     * @param key - The key of the value to delete.
     */
    public delete(key: string): void {
        this.cache.delete(key);
    }

    /**
     * Clears all values from the cache.
     */
    public clear(): void {
        this.cache.clear();
    }

    /**
     * Checks if a key exists in the cache.
     * 
     * @param key - The key to check.
     * @returns True if the key exists and has not expired, otherwise false.
     */
    public has(key: string): boolean {
        const cachedItem = this.cache.get(key);
        return cachedItem ? cachedItem.expiry >= Date.now() : false;
    }
}