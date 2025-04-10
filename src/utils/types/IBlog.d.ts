/**
 * Represents a summary of a Category, often nested within other objects.
 * NOTE: The exact fields might vary based on the actual data structure.
 */
interface CategorySummary {
    id: string;
    name: string; // Assuming at least 'id' and 'name' are present
    // Add other relevant category fields if known (e.g., slug, description)
}

/**
 * Represents a single Blog Post or similar content item.
 */
interface BlogPost {
    /** Unique identifier for the blog post. */
    id: string;

    /** The main title of the post. */
    title: string;

    /** An optional subtitle for the post. */
    subTitle: string | null;

    /** The type of content (e.g., 'Blog', 'News', 'Article'). */
    type: string; // Could be a specific literal type like 'Blog' if always the same

    /** ISO 8601 timestamp string for the publication date. */
    publishDate: string; // Could be parsed to Date

    /** A short description or excerpt of the post. */
    description: string;

    /** URL for an associated video, if any. */
    urlVideo: string;

    /** The main content of the post, likely as an HTML string. */
    texte: string;

    /** Potential field for content format or layout information. */
    format: string;

    /** Filename, path, or potentially a JSON string representing image(s). */
    images: string; // Consider if this could be string[] or a structured object

    /** The URL slug used to access the post. */
    url: string;

    /** Flag or count indicating if the post is marked as a favorite. (0 suggests false/not favorited). */
    favorit: number; // Could potentially be boolean if always 0 or 1

    /** String containing meta tags for SEO or other purposes. */
    metaTags: string;

    /** The publication status of the post (e.g., 'Publié', 'Draft', 'Archived'). */
    status: string; // Could be specific literals: 'Publié' | 'Draft' | ...

    /** ISO 8601 timestamp string indicating when the record was created. */
    createdAt: string; // Could be parsed to Date

    /** ISO 8601 timestamp string indicating when the record was last updated. */
    updatedAt: string; // Could be parsed to Date

    /** ISO 8601 timestamp string indicating when the record was soft-deleted, or null if not deleted. */
    deletedAt: string | null; // Could be parsed to Date | null

    /** Identifier linking this post to a specific site configuration. */
    siteId: string;

    /** The ID of the user who created this record. */
    userCreatedId: string;

    /** The ID of the user who last updated this record, or null if not updated by a user. */
    userUpdatedId: string | null;

    /** Identifier linking this post to its primary category. */
    categoryId: string;

    /** The nested category object associated with this post. */
    category: CategorySummary; // Use the defined CategorySummary interface
}

export interface IBlogResponse {
    count: number
    rows: BlogPost[]
}

export interface BlogByUrlResponse {
    blog: BlogPost; // The main blog post found by URL
    favoritBlogs: IBlogResponse; // Related favorite blogs (uses the standard list response structure)
}