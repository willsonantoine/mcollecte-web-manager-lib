/**
 * Represents a single Service item.
 */
interface IBlogCategory {
    /** Unique identifier for the service record. */
    id: string;

    /** The name of the service. */
    name: string;

    /** Filename or path for the service's image. */
    image: string;

    /** URL related to the service. */
    urlWeb: string;

    /** HTML string describing the service. */
    description: string;

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

    /** The ID of the user who soft-deleted this record, or null if not deleted by a user. */
    userDeleteId: string | null;

    /** Identifier linking this service to a specific site configuration (likely relates to the previous JSON's ID). */
    siteId: string;
}

export interface IBlogCategoryResponse {
    /** The total number of service records matching the query criteria (might differ from the length of 'rows' if paginated). */
    count: number;

    /** An array containing the service records for the current page or result set. */
    rows: IBlogCategory[];
}
