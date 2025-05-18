/**
 * Represents a single "Bloc" content item.
 */
interface BlocItem {
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

declare class BlocText {
    private _id;
    private _title;
    private _subTitle;
    private _type;
    private _publishDate;
    private _description;
    private _urlVideo;
    private _texte;
    private _format;
    private _images;
    private _url;
    private _favorit;
    private _metaTags;
    private _status;
    private _createdAt;
    private _updatedAt;
    private _deletedAt;
    private _siteId;
    private _userCreatedId;
    private _userUpdatedId;
    private _categoryId;
    /**
     * Creates an instance of BlocText.
     * @param data - An object conforming to BlocItemData to initialize the bloc.
     */
    constructor(data: BlocItem);
    /**
     * The unique identifier for this bloc item.
     * @readonly
     */
    get id(): string;
    get title(): string;
    get subTitle(): string | null;
    get type(): string;
    get publishDate(): string | null;
    get description(): string;
    get urlVideo(): string;
    get texte(): string;
    get format(): string | null;
    /** Gets the raw JSON string representation of images. */
    get images(): string;
    /** Gets the parsed array of image strings. Returns empty array on error or if empty. */
    get imageList(): string[];
    get url(): string | null;
    get favorit(): number;
    get metaTags(): string | null;
    get status(): string;
    get createdAt(): string;
    get updatedAt(): string;
    get deletedAt(): string | null;
    get siteId(): string;
    get userCreatedId(): string;
    get userUpdatedId(): string | null;
    get categoryId(): string | null;
    get publishDateAsDate(): Date | null;
    get createdAtAsDate(): Date;
    get updatedAtAsDate(): Date;
    get deletedAtAsDate(): Date | null;
    set id(value: string);
    set title(value: string);
    set subTitle(value: string | null);
    set type(value: string);
    set publishDate(value: string | null);
    set description(value: string);
    set urlVideo(value: string);
    set texte(value: string);
    set format(value: string | null);
    /** Sets the raw JSON string representation of images. */
    set images(value: string);
    /** Convenience setter to set images from an array (it stringifies it). */
    set imageList(value: string[]);
    set url(value: string | null);
    set favorit(value: number);
    set metaTags(value: string | null);
    set status(value: string);
    set createdAt(value: string);
    set updatedAt(value: string);
    set deletedAt(value: string | null);
    set siteId(value: string);
    set userCreatedId(value: string);
    set userUpdatedId(value: string | null);
    set categoryId(value: string | null);
}

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
interface IBlogPost {
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

interface IBlogResponse {
    count: number
    rows: IBlogPost[]
}

interface BlogByUrlResponse {
    blog: IBlogPost; // The main blog post found by URL
    favoritBlogs: IBlogResponse; // Related favorite blogs (uses the standard list response structure)
}

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

interface IBlogCategoryResponse {
    /** The total number of service records matching the query criteria (might differ from the length of 'rows' if paginated). */
    count: number;

    /** An array containing the service records for the current page or result set. */
    rows: IBlogCategory[];
}

/**
 * Represents the configuration and metadata for the Mcollecte System.
 */
interface ISiteInfos {
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

interface IContactMessage {
    id?: string;
    name?: string;
    email?: string;
    sujet?: string;
    message?: string;
    createdAt?: Date;
    updatedAt?: Date;
    hasRead?: boolean;
    hasReadByUserId?: string;
    hasReadAt?: Date;
}

interface SubCategoryItem {
    id: string;
    name: string;
    description: string;
    image: string;
    category?: CategoryItem;
}

interface CategoryItem {
    id: string;
    name: string;
    description: string;
    image: string;
    subCategories?: SubCategoryItem[];
}

interface CurrencyItem {
    id: string;
    name: string;
}

interface ProductItem {
    id: string;
    name: string;
    description: string;
    images: string; // JSON stringified array
    brand: string | null;
    type: string;
    stockLocation: string | null;
    url: string;
    unite: string;
    reference: string | null;
    price_max: number;
    price_min: number;
    currencyId: string;
    subCategoryId: string;
    createdAt: string;
    updatedAt: string;
    subCategory: SubCategoryItem;
    currency: CurrencyItem;
}

interface ISiteMember {
    id: string
    statusAt: string
    updatedAt: string
    member: IMember
}

interface IMember {
    fullname: string
    img: string
    number: string
    adress: string
    fonction: IFonction
}

interface IFonction {
    name: string
    description: string
}

interface ICreateAccount {
    name: string;
    phone: string;
    email?: string;
    password: string;
}

interface IUser {
    user: {
        id: string;
        username: string;
        email: string;
        phone: string;
        avatar: string;
        name: string;
    },
    token: string;
}

interface ILine {
    productId: string;
    quantity: number;
}

interface ICommande {
    id: string,
    amount: number,
    status: string,
    payementMethod: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    currency: { id: string, name: string },
    lines: [
        {
            id: string,
            quantity: number,
            price: number, 
            produit: {
                id: string,
                name: string,
                price_max: number,
                images: string,
                unite: string,
                type: string,
            }
        }
    ]
}

declare class McollectWebManagerLib {
    bloc: BlocItem[];
    private isInitialized;
    private initializationPromise;
    private apiUrl;
    private siteToken;
    private tokenUser;
    constructor({ api_url, site_token, tokenUser }: {
        api_url: string;
        site_token: string;
        tokenUser?: string;
    });
    initialize(): Promise<void>;
    private loadInitialData;
    private getBloc;
    getBlocById: (id: string) => Promise<BlocText | undefined>;
    getWebInfo: () => Promise<ISiteInfos>;
    getBlogsCategory: () => Promise<IBlogCategoryResponse>;
    getBlogs: () => Promise<IBlogResponse>;
    /**
     * Fetches a single blog post by its URL slug.
     * Also returns related favorite blog posts from the same category.
     * @param blogUrl - The URL slug of the blog post (e.g., "je-suis-le-premier-blog").
     * @returns A promise resolving to an object containing the main blog and favorite blogs.
     */
    getBlogByUrl: (blogUrl: string) => Promise<BlogByUrlResponse>;
    /**
     * Fetches a list of published blog posts belonging to a specific category.
     * @param categoryId - The unique identifier of the category.
     * @returns A promise resolving to the standard blog list API response structure.
     */
    getBlogsByCategory: (categoryId: string) => Promise<IBlogResponse>;
    createContactMessage: (data_: IContactMessage) => Promise<{
        status: boolean;
        message: string;
    }>;
    getProduct: ({ categoryId, search, subCategoryId }: {
        categoryId?: string;
        search?: string;
        subCategoryId?: string;
    }) => Promise<{
        product: {
            count: number;
            rows: ProductItem[];
        };
        category: CategoryItem[];
    }>;
    getMembers: () => Promise<{
        count: number;
        rows: ISiteMember[];
    }>;
    signUp: ({ name, password, phone, email }: ICreateAccount) => Promise<any>;
    recoverPassword: ({ phone }: {
        phone: string;
    }) => Promise<any>;
    resendOtp: ({ phone }: {
        phone: string;
    }) => Promise<any>;
    verifyOtp: ({ otp, phone }: {
        otp: string;
        phone: string;
    }) => Promise<{
        data: IUser | null;
        message: string;
        status: boolean;
    }>;
    signIn: ({ phone, password }: {
        phone: string;
        password: string;
    }) => Promise<{
        data: IUser | null;
        message: string;
        status: boolean;
    }>;
    commande: ({ lines, payementMethod, phoneNumber }: {
        payementMethod: string;
        phoneNumber?: string;
        lines: ILine[];
    }) => Promise<{
        data: IUser | null;
        message: string;
        status: boolean;
    }>;
    getCommandes: () => Promise<{
        data: ICommande[] | [];
        message: string;
        status: boolean;
    }>;
}
declare const Test: () => Promise<void>;

export { type BlocItem, BlocText, type BlogByUrlResponse, type CategoryItem, type IBlogCategory, type IBlogCategoryResponse, type IBlogPost, type IBlogResponse, type ICommande, type IContactMessage, type ICreateAccount, type IFonction, type ILine, type IMember, type ISiteInfos, type ISiteMember, type IUser, type ProductItem, type SubCategoryItem, Test, McollectWebManagerLib as default };
