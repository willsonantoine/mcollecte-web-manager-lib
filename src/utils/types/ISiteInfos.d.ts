/**
 * Represents the configuration and metadata for the Mcollecte System.
 */
export interface ISiteInfos {
    /** Unique identifier for the configuration record. */
    id: string;

    /** The name of the system. */
    name: string;

    /** A description of the system. */
    description: string;

    /** The title used for the system (e.g., in HTML titles). */
    title: string;

    /** Filename or path for the small icon. Note: Typo in original JSON ('smal_icon'). */
    smal_icon: string;

    /** Filename or path for the large icon. */
    large_icon: string;

    /** The main URL for accessing the system's frontend. */
    url: string;

    /**
     * JSON string representation of an array of social media links.
     * Consider parsing this string into string[] or a more structured type if needed.
     * Example: "[]" or "[\"https://facebook.com/...\"]"
     */
    social_media: string; // Or potentially: string[] | SocialMediaLink[]; if parsed

    /**
     * JSON string representation of an array defining menu items.
     * Consider parsing this string into string[] or a more structured type if needed.
     * Example: "[]" or "[{\"label\": \"Home\", \"path\": \"/\"}]"
     */
    menus: string; // Or potentially: string[] | MenuItem[]; if parsed

    /** An authentication or system token. */
    token: string;

    /**
     * JSON string representation of an array of phone numbers.
     * Consider parsing this string into string[] if needed.
     * Example: "[\"+243990084881\",\"+243858250506\"]"
     */
    phones: string; // Or potentially: string[]; if parsed

    /**
     * JSON string representation of an array of email addresses.
     * Consider parsing this string into string[] if needed.
     * Example: "[\"admin@mcollecte.com\",\"info@mcollecte.com\"]"
     */
    emails: string; // Or potentially: string[]; if parsed

    /** URL for an embedded map, if any. */
    mapUrl: string;

    /** Filename or path for the favicon. */
    favicon: string;

    /** The visual theme setting (e.g., 'light', 'dark'). */
    theme: 'light' | 'dark' | string; // Made slightly more specific, but allows other strings

    /** The default language code (e.g., 'fr', 'en'). */
    defaultLanguage: string;

    /** String containing meta tags for HTML head, if any. */
    metaTags: string;

    /** Google Analytics tracking ID, if any. */
    googleAnalyticsId: string;

    /** The base URL for the system's API. */
    apiUrl: string;

    /** ISO 8601 timestamp string indicating when the record was created. */
    createdAt: string; // Could also be represented as Date after parsing

    /** ISO 8601 timestamp string indicating when the record was last updated. */
    updatedAt: string; // Could also be represented as Date after parsing

    /** ISO 8601 timestamp string indicating when the record was soft-deleted, or null if not deleted. */
    deletedAt: string | null; // Could also be represented as Date | null after parsing

    /** The ID of the user who created this record. */
    userCreatedId: string;

    /** The ID of the user who last updated this record, or null if not updated by a user. */
    userUpdatedId: string | null;
}

// Example Usage (assuming you have parsed the JSON into an object):
// const systemConfig: McollecteSystemConfig = /* your parsed JSON object */;
// console.log(systemConfig.name);
// console.log(systemConfig.apiUrl);
//
// // If you need the actual arrays for phones/emails etc., you'd parse the strings:
// // const phoneNumbers: string[] = JSON.parse(systemConfig.phones);
// // const emailAddresses: string[] = JSON.parse(systemConfig.emails);