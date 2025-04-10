/**
 * Represents a single "Bloc" content item.
 */
export interface BlocItem {
    /** Unique identifier for the bloc record. */
    id: string;

    /** The main title of the bloc. */
    title: string;

    /** An optional subtitle for the bloc. */
    subTitle: string | null;

    /** The type of content (e.g., 'Bloc'). */
    type: string; // Could be a specific literal type like 'Bloc'

    /** ISO 8601 timestamp string for the publication date, or null if not published/scheduled. */
    publishDate: string | null; // Could be parsed to Date | null

    /** A short description of the bloc. */
    description: string;

    /** URL for an associated video, if any. */
    urlVideo: string;

    /** The main content of the bloc, likely as an HTML string. */
    texte: string;

    /** Potential field for content format or layout information. */
    format: string | null;

    /**
     * JSON string representation of an array of image filenames or paths.
     * Needs to be parsed (e.g., JSON.parse) to get the actual string array.
     * Example: "[\"file-1.jpg\",\"file-2.png\"]"
     */
    images: string; // Or potentially string[] after parsing

    /** The URL slug or path for the bloc, if applicable. */
    url: string | null;

    /** Flag or count indicating if the bloc is marked as a favorite. (0 suggests false/not favorited). */
    favorit: number; // Could potentially be boolean

    /** String containing meta tags for SEO or other purposes, or null. */
    metaTags: string | null;

    /** The publication status of the bloc (e.g., 'Brouillon', 'Publié'). */
    status: string; // Could be specific literals: 'Brouillon' | 'Publié' | ...

    /** ISO 8601 timestamp string indicating when the record was created. */
    createdAt: string; // Could be parsed to Date

    /** ISO 8601 timestamp string indicating when the record was last updated. */
    updatedAt: string; // Could be parsed to Date

    /** ISO 8601 timestamp string indicating when the record was soft-deleted, or null if not deleted. */
    deletedAt: string | null; // Could be parsed to Date | null

    /** Identifier linking this bloc to a specific site configuration. */
    siteId: string;

    /** The ID of the user who created this record. */
    userCreatedId: string;

    /** The ID of the user who last updated this record, or null if not updated by a user. */
    userUpdatedId: string | null;

    /** Identifier linking this bloc to a category, or null if not categorized. */
    categoryId: string | null;

    // Note: The 'category' object from the previous example is missing here,
    // likely because categoryId is null or it wasn't included in this specific query.
}

/**
 * Represents the structure of the API response containing a list of bloc items.
 */
export interface BlocApiResponse {
    /** The total number of bloc records matching the query criteria. */
    count: number;

    /** An array containing the bloc records for the current page or result set. */
    rows: BlocItem[];
}

// Example Usage (assuming you have parsed the JSON into an object):
// const apiResponse: BlocApiResponse = /* your parsed JSON object */;
//
// console.log(`Total blocs found: ${apiResponse.count}`);
// if (apiResponse.rows.length > 0) {
//   const firstBloc: BlocItem = apiResponse.rows[0];
//   console.log(`First bloc title: ${firstBloc.title}`);
//   console.log(`Status: ${firstBloc.status}`);
//
//   // To get the actual images array:
//   try {
//      const imageList: string[] = JSON.parse(firstBloc.images);
//      console.log('Images:', imageList);
//   } catch (e) {
//      console.error('Error parsing images JSON string:', e);
//      // Handle cases where images might not be a valid JSON array string
//   }
// }