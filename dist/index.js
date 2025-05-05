"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BlocText: () => BlocText,
  Test: () => Test,
  default: () => McollectWebManagerLib
});
module.exports = __toCommonJS(index_exports);

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
var import_axios = __toESM(require("axios"));
var HttpRequest = async ({
  api_url,
  method,
  route,
  data,
  userToken
}) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const url = `${api_url}/public${route}`;
  const config = {
    method,
    maxBodyLength: Infinity,
    url,
    data,
    headers: __spreadValues({
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, userToken && { Authorization: `Bearer ${userToken}` })
  };
  try {
    const result = await import_axios.default.request(config);
    return {
      status: true,
      message: ((_a = result.data) == null ? void 0 : _a.message) || "Requ\xEAte r\xE9ussie",
      code: result.status,
      data: ((_b = result.data) == null ? void 0 : _b.data) || {}
    };
  } catch (error) {
    console.log(((_d = (_c = error == null ? void 0 : error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message);
    return {
      status: false,
      message: ((_f = (_e = error == null ? void 0 : error.response) == null ? void 0 : _e.data) == null ? void 0 : _f.message) || error.message || "Erreur inconnue",
      code: ((_g = error == null ? void 0 : error.response) == null ? void 0 : _g.status) || 500,
      data: {}
    };
  }
};

// src/utils/vars.ts
var isValidEmail = (email) => {
  if (!email) {
    return false;
  }
  const trimmedEmail = email.trim();
  if (trimmedEmail.length === 0) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (trimmedEmail.length > 254) {
    return false;
  }
  return emailRegex.test(trimmedEmail);
};
var isValidName = (name, minLength = 2, maxLength = 100) => {
  if (!name) {
    return false;
  }
  const trimmedName = name.trim();
  if (trimmedName.length < minLength || trimmedName.length > maxLength) {
    return false;
  }
  const invalidCharsRegex = /[<>]/;
  if (invalidCharsRegex.test(trimmedName)) {
    console.warn("Name contains potentially unsafe characters (< or >).");
    return false;
  }
  return true;
};
var isValidMessage = (message, minLength = 10, maxLength = 2e3) => {
  if (!message) {
    return false;
  }
  const trimmedMessage = message.trim();
  if (trimmedMessage.length < minLength || trimmedMessage.length > maxLength) {
    return false;
  }
  const invalidCharsRegex = /[<>]/;
  if (invalidCharsRegex.test(trimmedMessage)) {
    console.warn("Message contains potentially unsafe characters (< or >). Server-side handling is critical.");
  }
  return true;
};

// src/index.ts
var McollectWebManagerLib = class {
  // Assuming this is for user token management
  constructor({ api_url, site_token, tokenUser }) {
    // Keep bloc management if necessary
    this.bloc = [];
    this.isInitialized = false;
    this.initializationPromise = null;
    this.tokenUser = null;
    // --- Existing Methods (Keep or modify as needed) ---
    // If you still manage Blocs
    this.getBloc = async () => {
      var _a;
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/blocs/${this.siteToken}/find`
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
    this.createContactMessage = async (data_) => {
      try {
        if (!isValidEmail(data_.email) && !isValidMessage(data_.message) && !isValidName(data_.name)) {
          return { status: false, message: "Invalid email,name or message" };
        }
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "POST",
          route: `/contact/${this.siteToken}/message/create`,
          data: { email: data_.email, name: data_.name, message: data_.message, sujet: data_.sujet }
        });
        return { status: response.status, message: response.message };
      } catch (error) {
        return { status: false, message: error.message };
      }
    };
    this.getProduct = async ({ categoryId = "", search = "", subCategoryId = "" }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/product/${this.siteToken}?categoryId=${categoryId}&subCategoryId=${subCategoryId}&search=${search} `
        });
        return response.data;
      } catch (error) {
        return { product: [], category: [] };
      }
    };
    this.getMembers = async () => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/members/${this.siteToken}`
        });
        return response.data;
      } catch (error) {
        return { count: 0, rows: [] };
      }
    };
    this.signUp = async ({ name, password, phone, email }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "POST",
          route: `/auth/create-account/${this.siteToken}`,
          data: { name, password, phone, email }
        });
        localStorage.setItem("phone", phone);
        return response.data;
      } catch (error) {
        return null;
      }
    };
    this.resendOtp = async ({ phone }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/auth/resend-otp/${this.siteToken}/${phone}`
        });
        return response.data;
      } catch (error) {
        return null;
      }
    };
    this.verifyOtp = async ({ otp, phone }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "POST",
          route: `/auth/verify-otp/${this.siteToken}`,
          data: { phone, otp }
        });
        if (response.status) {
          return { data: response.data, message: response.message, status: true };
        } else {
          console.error("Error verifying OTP:", response.message);
          return { data: null, message: response.message, status: false };
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        return { data: null, message: error.message, status: false };
      }
    };
    this.signIn = async ({ phone, password }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "POST",
          route: `/auth/login/${this.siteToken}`,
          data: { username: phone, password }
        });
        if (response.status) {
          return { data: response.data, message: response.message, status: true };
        } else {
          console.error("Error signing in:", response.message);
          return { data: null, message: response.message, status: false };
        }
      } catch (error) {
        console.error("Error signing in:", error);
        return { data: null, message: error.message, status: false };
      }
    };
    this.commande = async ({ lines, payementMethod, phoneNumber }) => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "POST",
          route: `/product/commandes/${this.siteToken}`,
          data: { phoneNumber, lines, payementMethod },
          userToken: this.tokenUser
        });
        if (response.status) {
          return { data: response.data, message: response.message, status: true };
        } else {
          console.error("Error signing in:", response.message);
          return { data: null, message: response.message, status: false };
        }
      } catch (error) {
        console.error("Error signing in:", error);
        return { data: null, message: error.message, status: false };
      }
    };
    this.getCommandes = async () => {
      try {
        const response = await HttpRequest({
          api_url: this.apiUrl,
          method: "GET",
          route: `/product/commandes/${this.siteToken}`,
          userToken: this.tokenUser
        });
        if (response.status) {
          return { data: response.data, message: response.message, status: true };
        } else {
          console.error("Error signing in:", response.message);
          return { data: null, message: response.message, status: false };
        }
      } catch (error) {
        console.error("Error signing in:", error);
        return { data: null, message: error.message, status: false };
      }
    };
    this.apiUrl = api_url;
    this.siteToken = site_token;
    this.tokenUser = tokenUser || null;
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
  const tokenUser = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkZTQ1OGY3LWM1NTMtNDgyMy05YTRlLTAwNjQ0YTQ1MTIzZSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNzQ2MDM1Nzg4fQ.Yq0wQSsgxstfgHPM_sNUMp8cf16fivvf-xn3agunCKs`;
  const cls = new McollectWebManagerLib({ api_url: url, site_token, tokenUser });
  try {
    const { data } = await cls.getCommandes();
    console.log(data);
  } catch (error) {
    console.error("\n--- An error occurred during testing ---:", error);
  }
};
Test();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlocText,
  Test
});
