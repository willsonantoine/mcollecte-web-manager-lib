// src/utils/controllers/BlocText.controller.ts
var BlocText = class {
  /**
   * Creates an instance of BlocText.
   * @param data - An object conforming to BlocItemData to initialize the bloc.
   */
  constructor(data) {
    this._id = data.id;
    this._title = data.title;
    this._subTitle = data.subTitle;
    this._type = data.type;
    this._publishDate = data.publishDate;
    this._description = data.description;
    this._urlVideo = data.urlVideo;
    this._texte = data.texte;
    this._format = data.format;
    this._images = data.images;
    this._url = data.url;
    this._favorit = data.favorit;
    this._metaTags = data.metaTags;
    this._status = data.status;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
    this._deletedAt = data.deletedAt;
    this._siteId = data.siteId;
    this._userCreatedId = data.userCreatedId;
    this._userUpdatedId = data.userUpdatedId;
    this._categoryId = data.categoryId;
  }
  // --- Getters ---
  /**
   * The unique identifier for this bloc item.
   * @readonly
   */
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get subTitle() {
    return this._subTitle;
  }
  get type() {
    return this._type;
  }
  get publishDate() {
    return this._publishDate;
  }
  get description() {
    return this._description;
  }
  get urlVideo() {
    return this._urlVideo;
  }
  get texte() {
    return this._texte;
  }
  get format() {
    return this._format;
  }
  /** Gets the raw JSON string representation of images. */
  get images() {
    return this._images;
  }
  /** Gets the parsed array of image strings. Returns empty array on error or if empty. */
  get imageList() {
    try {
      if (!this._images || this._images === "[]" || this._images === "null") {
        return [];
      }
      const parsed = JSON.parse(this._images);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error parsing images JSON string:", this._images, e);
      return [];
    }
  }
  get url() {
    return this._url;
  }
  get favorit() {
    return this._favorit;
  }
  get metaTags() {
    return this._metaTags;
  }
  get status() {
    return this._status;
  }
  get createdAt() {
    return this._createdAt;
  }
  get updatedAt() {
    return this._updatedAt;
  }
  get deletedAt() {
    return this._deletedAt;
  }
  get siteId() {
    return this._siteId;
  }
  get userCreatedId() {
    return this._userCreatedId;
  }
  get userUpdatedId() {
    return this._userUpdatedId;
  }
  get categoryId() {
    return this._categoryId;
  }
  // --- Helper Getters for Dates as Date objects (optional but often useful) ---
  get publishDateAsDate() {
    return this._publishDate ? new Date(this._publishDate) : null;
  }
  get createdAtAsDate() {
    return new Date(this._createdAt);
  }
  get updatedAtAsDate() {
    return new Date(this._updatedAt);
  }
  get deletedAtAsDate() {
    return this._deletedAt ? new Date(this._deletedAt) : null;
  }
  // --- Setters ---
  // Note: Setting ID, createdAt, userCreatedId is often discouraged after creation.
  set id(value) {
    console.warn("Attempting to set immutable property 'id'. This might not be intended.");
    this._id = value;
  }
  set title(value) {
    this._title = value;
  }
  set subTitle(value) {
    this._subTitle = value;
  }
  set type(value) {
    this._type = value;
  }
  set publishDate(value) {
    this._publishDate = value;
  }
  set description(value) {
    this._description = value;
  }
  set urlVideo(value) {
    this._urlVideo = value;
  }
  set texte(value) {
    this._texte = value;
  }
  set format(value) {
    this._format = value;
  }
  /** Sets the raw JSON string representation of images. */
  set images(value) {
    this._images = value;
  }
  /** Convenience setter to set images from an array (it stringifies it). */
  set imageList(value) {
    try {
      this._images = JSON.stringify(value);
    } catch (e) {
      console.error("Error stringifying image list:", value, e);
      this._images = "[]";
    }
  }
  set url(value) {
    this._url = value;
  }
  set favorit(value) {
    this._favorit = value;
  }
  set metaTags(value) {
    this._metaTags = value;
  }
  set status(value) {
    this._status = value;
  }
  // Setting createdAt, updatedAt, deletedAt manually is usually done by the backend/database
  set createdAt(value) {
    console.warn("Attempting to manually set 'createdAt'. This is usually handled by the system.");
    this._createdAt = value;
  }
  set updatedAt(value) {
    console.warn("Attempting to manually set 'updatedAt'. This is usually handled by the system.");
    this._updatedAt = value;
  }
  set deletedAt(value) {
    console.warn("Attempting to manually set 'deletedAt'. This is usually handled by the system.");
    this._deletedAt = value;
  }
  set siteId(value) {
    this._siteId = value;
  }
  set userCreatedId(value) {
    console.warn("Attempting to set immutable property 'userCreatedId'. This might not be intended.");
    this._userCreatedId = value;
  }
  set userUpdatedId(value) {
    this._userUpdatedId = value;
  }
  set categoryId(value) {
    this._categoryId = value;
  }
};

// src/utils/httpRequest.ts
import axios from "axios";
var HttpRequest = async ({
  api_url,
  method,
  route
}) => {
  var _a, _b, _c, _d, _e;
  const config = {
    method,
    maxBodyLength: Infinity,
    url: `${api_url}/public${route}`
  };
  try {
    const result = await axios.request(config);
    return {
      status: true,
      message: ((_a = result.data) == null ? void 0 : _a.message) || "Requ\xEAte r\xE9ussie",
      code: result.status,
      data: ((_b = result.data) == null ? void 0 : _b.data) || {}
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: ((_d = (_c = error == null ? void 0 : error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || "Erreur inconnue",
      code: ((_e = error == null ? void 0 : error.response) == null ? void 0 : _e.status) || 500,
      data: {}
    };
  }
};

// src/index.ts
var McollectWebManagerLib = class {
  constructor({ api_url, site_token }) {
    // Keep bloc management if necessary
    this.bloc = [];
    this.isInitialized = false;
    this.initializationPromise = null;
    // --- Existing Methods (Keep or modify as needed) ---
    // If you still manage Blocs
    this.getBloc = async () => {
      var _a;
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/blocs/${this.siteToken}/find`
          // Adjusted route to include /public/
        });
        if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.rows) {
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
    };
    // Ensure you await initialize before calling this if needed
    this.getBlocById = async (id) => {
      if (!this.isInitialized) {
        await this.initialize();
      }
      const find = this.bloc.find((item) => (item == null ? void 0 : item.id) === id);
      if (!find) return void 0;
      return new BlocText(find);
    };
    this.getWebInfo = async () => {
      const response = await HttpRequest({
        api_url: this.apiUrl,
        method: "GET",
        route: `/site/${this.siteToken}/find`
        // Added /public/ prefix
      });
      return response.data;
    };
    this.getBlogsCategory = async () => {
      const response = await HttpRequest({
        api_url: this.apiUrl,
        method: "GET",
        // Assuming route is for listing categories, not blogs within a category
        route: `/blogs-category/${this.siteToken}/find`
        // Added /public/ prefix
      });
      return response.data;
    };
    // Method to get ALL blogs (likely paginated)
    this.getBlogs = async () => {
      const route = `/blogs/${this.siteToken}/find`;
      const response = await HttpRequest({
        api_url: this.apiUrl,
        method: "GET",
        route
      });
      return response.data;
    };
    // --- NEW METHODS ---
    /**
     * Fetches a single blog post by its URL slug.
     * Also returns related favorite blog posts from the same category.
     * @param blogUrl - The URL slug of the blog post (e.g., "je-suis-le-premier-blog").
     * @returns A promise resolving to an object containing the main blog and favorite blogs.
     */
    this.getBlogByUrl = async (blogUrl) => {
      var _a;
      const route = `/blog/${this.siteToken}/${encodeURIComponent(blogUrl)}/find-by-url`;
      const response = await HttpRequest({
        api_url: this.apiUrl,
        method: "GET",
        route
      });
      if (!((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.blog)) {
        throw new Error(`Blog not found for URL: ${blogUrl}`);
      }
      return response.data;
    };
    /**
     * Fetches a list of published blog posts belonging to a specific category.
     * @param categoryId - The unique identifier of the category.
     * @returns A promise resolving to the standard blog list API response structure.
     */
    this.getBlogsByCategory = async (categoryId) => {
      const route = `/blogs/${this.siteToken}/${categoryId}/find`;
      const response = await HttpRequest({
        api_url: this.apiUrl,
        method: "GET",
        route
      });
      if (!(response == null ? void 0 : response.data)) {
        throw new Error(`Could not fetch blogs for category ID: ${categoryId}`);
      }
      return response.data;
    };
    this.apiUrl = api_url;
    this.siteToken = site_token;
  }
  // --- Initialization Method (using Option 1 from previous answer) ---
  async initialize() {
    if (this.isInitialized) return Promise.resolve();
    if (this.initializationPromise) return this.initializationPromise;
    this.initializationPromise = this.loadInitialData().then(() => {
      this.isInitialized = true;
      this.initializationPromise = null;
      console.log("McollectWebManagerLib initialized successfully.");
    }).catch((error) => {
      this.initializationPromise = null;
      console.error("McollectWebManagerLib initialization failed:", error);
      throw error;
    });
    return this.initializationPromise;
  }
  // Helper to load initial data (e.g., blocs if needed)
  async loadInitialData() {
    await this.getBloc();
    await Promise.resolve();
  }
};
var Test = async () => {
  const url = "http://localhost:2006";
  const site_token = "29952c36-191d-405a-937d-cf31593123b7";
  const cls = new McollectWebManagerLib({ api_url: url, site_token });
  try {
    await cls.initialize();
    const blocIdToTest = "dbbea4bc-130f-4cab-a258-d7147d278561";
    console.log(`
Fetching bloc by ID: ${blocIdToTest}...`);
    const bloc = await cls.getBlocById(blocIdToTest);
    console.log("Fetched bloc:", bloc);
  } catch (error) {
  }
};
Test();
export {
  Test,
  McollectWebManagerLib as default
};
