/**
 * Checks if a string is a reasonably formatted email address.
 * This is a basic check, not RFC 5322 compliant.
 * @param email - The email string to validate.
 * @returns True if the email seems valid, false otherwise.
 */
export const isValidEmail = (email: string | null | undefined): boolean => {
    if (!email) {
        return false; // Handle null/undefined case
    }
    const trimmedEmail = email.trim();
    if (trimmedEmail.length === 0) {
        return false;
    }
    // Basic regex for email format: chars@chars.chars
    // Allows common characters, requires '@' and '.', minimum 2 chars for domain extension.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check length (optional but good practice)
    if (trimmedEmail.length > 254) { // Standard max length
        return false;
    }
    return emailRegex.test(trimmedEmail);
};

/**
 * Checks if a name string is valid (non-empty, reasonable length, basic character check).
 * @param name - The name string to validate.
 * @param minLength - Minimum allowed length (default: 2).
 * @param maxLength - Maximum allowed length (default: 100).
 * @returns True if the name seems valid, false otherwise.
 */
export const isValidName = (
    name: string | null | undefined,
    minLength: number = 2,
    maxLength: number = 100
): boolean => {
    if (!name) {
        return false;
    }
    const trimmedName = name.trim();
    if (trimmedName.length < minLength || trimmedName.length > maxLength) {
        return false;
    }
    // Basic security check: Disallow characters often used in HTML/Script injection (<, >).
    // Server-side sanitization is still crucial.
    const invalidCharsRegex = /[<>]/;
    if (invalidCharsRegex.test(trimmedName)) {
        console.warn('Name contains potentially unsafe characters (< or >).');
        return false; // Or handle differently if needed
    }
    // Optional: Allow only specific characters (e.g., letters, spaces, hyphens, apostrophes)
    // const allowedCharsRegex = /^[a-zA-ZÀ-ÿ'-\s]+$/;
    // if (!allowedCharsRegex.test(trimmedName)) {
    //    return false;
    // }
    return true;
};

/**
 * Checks if a subject string is valid (non-empty, reasonable length, basic character check).
 * @param subject - The subject string to validate.
 * @param minLength - Minimum allowed length (default: 3).
 * @param maxLength - Maximum allowed length (default: 150).
 * @returns True if the subject seems valid, false otherwise.
 */
export const isValidSubject = (
    subject: string | null | undefined,
    minLength: number = 3,
    maxLength: number = 150
): boolean => {
    if (!subject) {
        return false;
    }
    const trimmedSubject = subject.trim();
    if (trimmedSubject.length < minLength || trimmedSubject.length > maxLength) {
        return false;
    }
    // Basic security check: Disallow <, >
    const invalidCharsRegex = /[<>]/;
    if (invalidCharsRegex.test(trimmedSubject)) {
        console.warn('Subject contains potentially unsafe characters (< or >).');
        return false;
    }
    return true;
};

/**
 * Checks if a message string is valid (non-empty, reasonable length, basic character check).
 * @param message - The message string to validate.
 * @param minLength - Minimum allowed length (default: 10).
 * @param maxLength - Maximum allowed length (default: 2000).
 * @returns True if the message seems valid, false otherwise.
 */
export const isValidMessage = (
    message: string | null | undefined,
    minLength: number = 10,
    maxLength: number = 2000
): boolean => {
    if (!message) {
        return false;
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < minLength || trimmedMessage.length > maxLength) {
        return false;
    }
    // Basic security check: Disallow <, >.
    // Be careful here: users might legitimately use these in some contexts.
    // Server-side encoding/sanitization is the MOST important step for messages.
    const invalidCharsRegex = /[<>]/;
    if (invalidCharsRegex.test(trimmedMessage)) {
        console.warn('Message contains potentially unsafe characters (< or >). Server-side handling is critical.');
        // Decide if you want to block it client-side or just rely on server.
        // For messages, often better to allow and rely on server sanitization/encoding.
        // return false; // Uncomment to block client-side
    }
    return true;
};
