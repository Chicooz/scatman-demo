import { registerUser } from '../register'; // Adjust the import path as necessary
import { User } from '../types'; // Adjust the import path as necessary

describe('User Registration', () => {
    it('should successfully register a user with valid data', async () => {
        const userData: User = {
            username: 'testuser',
            password: 'password123',
            email: 'testuser@example.com',
        };

        const result = await registerUser(userData);
        expect(result).toHaveProperty('success', true);
        expect(result).toHaveProperty('message', 'User registered successfully');
    });

    it('should fail to register a user with missing username', async () => {
        const userData: User = {
            username: '',
            password: 'password123',
            email: 'testuser@example.com',
        };

        const result = await registerUser(userData);
        expect(result).toHaveProperty('success', false);
        expect(result).toHaveProperty('message', 'Username is required');
    });

    it('should fail to register a user with invalid email', async () => {
        const userData: User = {
            username: 'testuser',
            password: 'password123',
            email: 'invalid-email',
        };

        const result = await registerUser(userData);
        expect(result).toHaveProperty('success', false);
        expect(result).toHaveProperty('message', 'Invalid email format');
    });

    it('should fail to register a user with weak password', async () => {
        const userData: User = {
            username: 'testuser',
            password: '123',
            email: 'testuser@example.com',
        };

        const result = await registerUser(userData);
        expect(result).toHaveProperty('success', false);
        expect(result).toHaveProperty('message', 'Password must be at least 6 characters long');
    });
});