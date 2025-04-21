// Assume BlocText controller is still relevant if you mix Blocs and Blogs
import { BlocText } from "./utils/controllers/BlocText.controller";
import { HttpRequest } from "./utils/httpRequest";
import { BlocItem } from "./utils/types/IBloc"; // Keep if needed for blocs
import { BlogByUrlResponse, IBlogResponse } from "./utils/types/IBlogPost";
// Import the necessary Blog interfaces defined above
import { IBlogCategoryResponse } from "./utils/types/IBlogCategory"; // Assuming this lists categories
import { ISiteInfos } from "./utils/types/ISiteInfos"; // Assuming ISiteInfos is the type for /site/.../find
import { IContactMessage } from "./utils/types/IContactMessage";

import { isValidEmail, isValidMessage, isValidName } from "./utils/vars";
import { ProductItem } from "./utils/types/IProduit";
import { CategoryItem } from "./utils/types/ICategory";

// If BlocText is meant to be public, export it too
export { BlocText } from './utils/controllers/BlocText.controller';

// --- Export necessary TYPES and INTERFACES ---
export type { BlocItem } from './utils/types/IBloc'; // Assuming IBloc.ts defines BlocItem
export type { IBlogPost, IBlogResponse, BlogByUrlResponse } from './utils/types/IBlogPost';
export type { IBlogCategory, IBlogCategoryResponse } from './utils/types/IBlogCategory';
export type { ISiteInfos } from './utils/types/ISiteInfos';
export type { IContactMessage } from './utils/types/IContactMessage'

export default class McollectWebManagerLib {
    // Keep bloc management if necessary
    public bloc: BlocItem[] = [];
    private isInitialized = false;
    private initializationPromise: Promise<void> | null = null;
    private apiUrl: string;
    private siteToken: string;

    constructor({ api_url, site_token }: { api_url: string, site_token: string }) {
        this.apiUrl = api_url;
        this.siteToken = site_token;
    }

    // --- Initialization Method (using Option 1 from previous answer) ---
    public async initialize(): Promise<void> {
        if (this.isInitialized) return Promise.resolve();
        if (this.initializationPromise) return this.initializationPromise;

        this.initializationPromise = this.loadInitialData()
            .then(() => {
                this.isInitialized = true;
                this.initializationPromise = null;
                console.log("McollectWebManagerLib initialized successfully.");
            })
            .catch(error => {
                this.initializationPromise = null;
                console.error("McollectWebManagerLib initialization failed:", error);
                throw error;
            });
        return this.initializationPromise;
    }

    // Helper to load initial data (e.g., blocs if needed)
    private async loadInitialData(): Promise<void> {
        // Only fetch blocs if they are needed immediately by other methods
        await this.getBloc();
        // console.log("Blocs loaded during initialization.");
        await Promise.resolve(); // Placeholder if no initial data needed now
    }

    // --- Existing Methods (Keep or modify as needed) ---

    // If you still manage Blocs
    private getBloc = async (): Promise<void> => {
        try {
            const response = await HttpRequest({
                api_url: this.apiUrl,
                method: 'GET',
                route: `/blocs/${this.siteToken}/find`
            });
            if (response?.data?.rows) {
                this.bloc = response.data.rows;
            } else {
                console.warn("Received unexpected data structure from /blocs endpoint:", response);
                this.bloc = [];
            }
        } catch (error) {
            console.error("Error fetching blocs:", error);
            this.bloc = [];
            throw error;
        }
    }

    // Ensure you await initialize before calling this if needed
    public getBlocById = async (id: string): Promise<BlocText | undefined> => {
        if (!this.isInitialized) {
            // Consider awaiting initialize() or throwing an error
            await this.initialize(); // Example: Implicit init
        }
        const find = this.bloc.find((item) => item?.id === id);
        if (!find) return undefined;
        return new BlocText(find); // Assuming BlocText constructor matches BlocItem
    }


    public getWebInfo = async (): Promise<ISiteInfos> => {
        // Route adjusted to include /public/ if that's the standard
        const response = await HttpRequest({
            api_url: this.apiUrl,
            method: 'GET',
            route: `/site/${this.siteToken}/find` // Added /public/ prefix
        });
        return response.data;
    }

    public getBlogsCategory = async (): Promise<IBlogCategoryResponse> => {
        // Assuming IBlogCategoryResponse is the correct type for this list
        const response = await HttpRequest({
            api_url: this.apiUrl,
            method: 'GET',
            // Assuming route is for listing categories, not blogs within a category
            route: `/blogs-category/${this.siteToken}/find` // Added /public/ prefix
        });
        return response.data;
    }

    // Method to get ALL blogs (likely paginated) 
    public getBlogs = async (/* Add pagination params if needed: page, limit */): Promise<IBlogResponse> => {
        // Add query params for pagination if applicable
        const route = `/blogs/${this.siteToken}/find`; // Added /public/ prefix
        const response = await HttpRequest({
            api_url: this.apiUrl,
            method: 'GET',
            route: route
        });
        return response.data;
    }

    // --- NEW METHODS ---

    /**
     * Fetches a single blog post by its URL slug.
     * Also returns related favorite blog posts from the same category.
     * @param blogUrl - The URL slug of the blog post (e.g., "je-suis-le-premier-blog").
     * @returns A promise resolving to an object containing the main blog and favorite blogs.
     */
    public getBlogByUrl = async (blogUrl: string): Promise<BlogByUrlResponse> => {
        // Construct the correct route based on the API spec
        // Note: Using /blogs/ as per the data structure, not /blocs/ from example URL
        const route = `/blog/${this.siteToken}/${encodeURIComponent(blogUrl)}/find-by-url`;
        const response = await HttpRequest({
            api_url: this.apiUrl,
            method: 'GET',
            route: route
        });
        // Perform validation if necessary
        if (!response?.data?.blog) {
            throw new Error(`Blog not found for URL: ${blogUrl}`);
        }
        return response.data;
    }

    /**
     * Fetches a list of published blog posts belonging to a specific category.
     * @param categoryId - The unique identifier of the category.
     * @returns A promise resolving to the standard blog list API response structure.
     */
    public getBlogsByCategory = async (categoryId: string): Promise<IBlogResponse> => {
        const route = `/blogs/${this.siteToken}/${categoryId}/find`;
        const response = await HttpRequest({
            api_url: this.apiUrl,
            method: 'GET',
            route: route
        });
        // Perform validation if necessary
        if (!response?.data) {
            throw new Error(`Could not fetch blogs for category ID: ${categoryId}`);
        }
        return response.data;
    }

    public createContactMessage = async (data_: IContactMessage): Promise<{ status: boolean, message: string }> => {
        try {
            if (!isValidEmail(data_.email) && !isValidMessage(data_.message) && !isValidName(data_.name)) {
                return { status: false, message: 'Invalid email,name or message' };
            }
            const response = await HttpRequest({
                api_url: this.apiUrl,
                method: 'POST',
                route: `/contact/${this.siteToken}/message/create`,
                data: { email: data_.email, name: data_.name, message: data_.message, sujet: data_.sujet }
            });
            return { status: response.status, message: response.message };
        } catch (error: any) {
            return { status: false, message: error.message };
        }
    }

    public getProduct = async ({ categoryId = "", search = "", subCategoryId = "" }: { categoryId?: string, search?: string, subCategoryId?: string }): Promise<{ product: ProductItem[], category: CategoryItem[] }> => {
        try {
            const response = await HttpRequest({
                api_url: this.apiUrl,
                method: 'GET',
                route: `/product/${this.siteToken}?categoryId=${categoryId}&subCategoryId=${subCategoryId}&search=${search} `,
            });
            return response.data;
        } catch (error: any) {
            return { product: [], category: [] };
        }
    }
}


// --- Example Usage (using async IIFE) --- 
export const Test = async () => {
    const url = "http://localhost:2006";
    const site_token = "29952c36-191d-405a-937d-cf31593123b7";
    const cls = new McollectWebManagerLib({ api_url: url, site_token: site_token });

    try {
        // Initialize if your methods depend on pre-loaded data (like getBlocById might)
        await cls.initialize(); // Uncomment if needed

        // --- Test Get Blog by URL ---
        // const blogsCategory = await cls.getBlogsCategory();
        // console.log('All blogsCategory :: ', blogsCategory);
        // const blogs = await cls.getBlogs();
        // console.log('All blogs :: ', blogs);
        // const blogUrlSlug = 'je-suis-le-premier-blog';
        // console.log(`\nFetching blog by URL: ${blogUrlSlug}...`);
        // const blogDetail = await cls.getBlogByUrl(blogUrlSlug);
        // console.log('Blog found by URL:', blogDetail.blog.title);
        // console.log('Favorite Blogs Count in same category:', blogDetail.favoritBlogs.count);
        // if (blogDetail.favoritBlogs.rows.length > 0) {
        //     console.log('First favorite blog title:', blogDetail.favoritBlogs.rows[0].title);
        // }

        // --- Test Get Blogs by Category ---
        // const categoryIdToTest = '7331361b-8990-43d6-9db8-b73aaadd18de'; // Example category ID
        // console.log(`\nFetching blogs for category ID: ${categoryIdToTest}...`);
        // const blogsInCategory = await cls.getBlogsByCategory(categoryIdToTest);
        // console.log(`Found ${blogsInCategory.count} blog(s) in category ${categoryIdToTest}.`);
        // if (blogsInCategory.rows.length > 0) {
        //     console.log('First blog title in category:', blogsInCategory.rows[0].title);
        //     // You could loop through blogsInCategory.rows here
        // }

        // ---- Get bloc by Id 
        // const blocIdToTest = 'dbbea4bc-130f-4cab-a258-d7147d278561'; // Example bloc ID
        // console.log(`\nFetching bloc by ID: ${blocIdToTest}...`);
        // const bloc = await cls.getBlocById(blocIdToTest);
        // console.log('Fetched bloc:', bloc?.imageList);

        // ----- Test send message
        // await cls.createContactMessage({
        //     email: 'willsonantoine@gmail.com',
        //     message: "Je suis le message de test",
        //     name: 'Willson Antoine',
        //     sujet: 'Contact pour entrevue'
        // })

        // ----- Test get product
        const result = await cls.getProduct({ categoryId: '', search: '', subCategoryId: '' });
        console.log(result.product[0]);
    } catch (error) {
        console.error("\n--- An error occurred during testing ---:", error);
    }
}
Test();
