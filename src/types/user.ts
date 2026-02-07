/**
 * Represents a user in the system.
 */
export interface User {
    /** Unique identifier for the user */
    id: string;

    /** The user's full name */
    name: string;

    /** The user's email address */
    email: string;

    /** The user's profile picture URL */
    profilePicture?: string;

    /** The user's date of birth */
    dateOfBirth?: Date;

    /** The user's role in the system */
    role: UserRole;
}

/**
 * Enum representing the possible roles a user can have.
 */
export enum UserRole {
    /** User with basic access */
    USER = 'USER',

    /** User with administrative access */
    ADMIN = 'ADMIN',

    /** User with moderator access */
    MODERATOR = 'MODERATOR',
}

/**
 * Represents the response structure for user-related API calls.
 */
export interface UserResponse {
    /** The user object */
    user: User;

    /** Status of the API call */
    status: string;

    /** Optional message providing additional information */
    message?: string;
}