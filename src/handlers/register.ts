import { APIGatewayEvent, Context, Callback, Handler } from 'aws-lambda';

/**
 * Interface representing a user registration request.
 */
interface UserRegistrationRequest {
    username: string;
    password: string;
    email: string;
}

/**
 * Interface representing the response from the registration handler.
 */
interface RegistrationResponse {
    message: string;
    userId?: string;
}

/**
 * Lambda function handler for user registration.
 * 
 * @param event - The API Gateway event containing the registration data.
 * @param context - The context object providing information about the invocation.
 * @param callback - The callback function to return the response.
 */
export const registerUser: Handler<APIGatewayEvent, RegistrationResponse> = async (
    event: APIGatewayEvent,
    context: Context,
    callback: Callback<RegistrationResponse>
): Promise<RegistrationResponse> => {
    try {
        const body: UserRegistrationRequest = JSON.parse(event.body || '{}');

        // Validate the input
        if (!body.username || !body.password || !body.email) {
            return {
                message: 'Invalid input. Please provide username, password, and email.',
            };
        }

        // Here you would typically save the user to a database and return the user ID.
        // For demonstration purposes, we will simulate a user ID.
        const userId = 'user-' + Date.now();

        // Return a successful registration response
        return {
            message: 'User registered successfully.',
            userId: userId,
        };
    } catch (error) {
        console.error('Error registering user:', error);
        return {
            message: 'An error occurred during registration.',
        };
    }
};