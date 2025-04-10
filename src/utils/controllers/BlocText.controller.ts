// Define the interface based on the structure (useful for the constructor)
// You might have this defined elsewhere already

import { BlocItem } from "../types/IBloc";

  
 export class BlocText {
      // Private member variables
      private _id: string;
      private _title: string;
      private _subTitle: string | null;
      private _type: string;
      private _publishDate: string | null;
      private _description: string;
      private _urlVideo: string;
      private _texte: string;
      private _format: string | null;
      private _images: string; // Stores the raw JSON string
      private _url: string | null;
      private _favorit: number;
      private _metaTags: string | null;
      private _status: string;
      private _createdAt: string;
      private _updatedAt: string;
      private _deletedAt: string | null;
      private _siteId: string;
      private _userCreatedId: string;
      private _userUpdatedId: string | null;
      private _categoryId: string | null;
  
      /**
       * Creates an instance of BlocText.
       * @param data - An object conforming to BlocItemData to initialize the bloc.
       */
      constructor(data: BlocItem) {
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
      public get id(): string {
          return this._id;
      }
  

      public get title(): string {
          return this._title;
      }
  
      public get subTitle(): string | null {
          return this._subTitle;
      }
  
      public get type(): string {
          return this._type;
      }
  
      public get publishDate(): string | null {
          return this._publishDate;
      }
  
      public get description(): string {
          return this._description;
      }
  
      public get urlVideo(): string {
          return this._urlVideo;
      }
  
      public get texte(): string {
          return this._texte;
      }
  
      public get format(): string | null {
          return this._format;
      }
  
      /** Gets the raw JSON string representation of images. */
      public get images(): string {
          return this._images;
      }
  
      /** Gets the parsed array of image strings. Returns empty array on error or if empty. */
      public get imageList(): string[] {
          try {
               if (!this._images || this._images === '[]' || this._images === 'null') {
                   return [];
               }
               const parsed = JSON.parse(this._images);
               return Array.isArray(parsed) ? parsed : [];
          } catch (e) {
              console.error("Error parsing images JSON string:", this._images, e);
              return []; // Return empty array on parsing error
          }
      }
  
      public get url(): string | null {
          return this._url;
      }
  
      public get favorit(): number {
          return this._favorit;
      }
  
      public get metaTags(): string | null {
          return this._metaTags;
      }
  
      public get status(): string {
          return this._status;
      }
  
      public get createdAt(): string {
          return this._createdAt;
      }
  
      public get updatedAt(): string {
          return this._updatedAt;
      }
  
      public get deletedAt(): string | null {
          return this._deletedAt;
      }
  
      public get siteId(): string {
          return this._siteId;
      }
  
      public get userCreatedId(): string {
          return this._userCreatedId;
      }
  
      public get userUpdatedId(): string | null {
          return this._userUpdatedId;
      }
  
      public get categoryId(): string | null {
          return this._categoryId;
      }
  
       // --- Helper Getters for Dates as Date objects (optional but often useful) ---
  
      public get publishDateAsDate(): Date | null {
          return this._publishDate ? new Date(this._publishDate) : null;
      }
  
      public get createdAtAsDate(): Date {
          // Assuming createdAt is always present and valid
          return new Date(this._createdAt);
      }
  
      public get updatedAtAsDate(): Date {
           // Assuming updatedAt is always present and valid
          return new Date(this._updatedAt);
      }
  
      public get deletedAtAsDate(): Date | null {
          return this._deletedAt ? new Date(this._deletedAt) : null;
      }
  
  
      // --- Setters ---
  
      // Note: Setting ID, createdAt, userCreatedId is often discouraged after creation.
      public set id(value: string) {
          console.warn("Attempting to set immutable property 'id'. This might not be intended.");
          this._id = value;
      }
  
      public set title(value: string) {
          this._title = value;
      }
  
      public set subTitle(value: string | null) {
          this._subTitle = value;
      }
  
      public set type(value: string) {
          this._type = value;
      }
  
      public set publishDate(value: string | null) {
          this._publishDate = value;
      }
  
      public set description(value: string) {
          this._description = value;
      }
  
      public set urlVideo(value: string) {
          this._urlVideo = value;
      }
  
      public set texte(value: string) {
          this._texte = value;
      }
  
      public set format(value: string | null) {
          this._format = value;
      }
  
      /** Sets the raw JSON string representation of images. */
      public set images(value: string) {
          // Optional: Add validation to ensure it's a parseable JSON array string?
          this._images = value;
      }
  
      /** Convenience setter to set images from an array (it stringifies it). */
      public set imageList(value: string[]) {
          try {
              this._images = JSON.stringify(value);
          } catch (e) {
              console.error("Error stringifying image list:", value, e);
              // Decide how to handle error: maybe set to '[]' or throw?
              this._images = '[]';
          }
      }
  
      public set url(value: string | null) {
          this._url = value;
      }
  
      public set favorit(value: number) {
          this._favorit = value;
      }
  
      public set metaTags(value: string | null) {
          this._metaTags = value;
      }
  
      public set status(value: string) {
          this._status = value;
      }
  
      // Setting createdAt, updatedAt, deletedAt manually is usually done by the backend/database
      public set createdAt(value: string) {
          console.warn("Attempting to manually set 'createdAt'. This is usually handled by the system.");
          this._createdAt = value;
      }
  
      public set updatedAt(value: string) {
           console.warn("Attempting to manually set 'updatedAt'. This is usually handled by the system.");
          this._updatedAt = value;
      }
  
      public set deletedAt(value: string | null) {
           console.warn("Attempting to manually set 'deletedAt'. This is usually handled by the system.");
          this._deletedAt = value;
      }
  
      public set siteId(value: string) {
          this._siteId = value;
      }
  
      public set userCreatedId(value: string) {
          console.warn("Attempting to set immutable property 'userCreatedId'. This might not be intended.");
          this._userCreatedId = value;
      }
  
      public set userUpdatedId(value: string | null) {
          this._userUpdatedId = value;
      }
  
      public set categoryId(value: string | null) {
          this._categoryId = value;
      }
  }
  
  // --- Example Usage ---
  
  // Assuming you have the JSON data in a variable `blocJsonData`
  // const blocJsonData = { /* ... your JSON object for one bloc item ... */ };
  
  // Create an instance of the class
  // const blocInstance = new BlocText(blocJsonData as BlocItemData);
  
  // Access data using getters
  // console.log(blocInstance.title);        // "je suis le bloc"
  // console.log(blocInstance.status);       // "Brouillon"
  // console.log(blocInstance.imageList);    // ["file-1744293717610.jpg"]
  // console.log(blocInstance.createdAtAsDate); // Date object for 2025-04-10T15:22:21.000Z
  
  // Modify data using setters
  // blocInstance.title = "Nouveau Titre du Bloc";
  // blocInstance.status = "Publié";
  // blocInstance.imageList = ["new-image.png", "another-image.jpg"]; // Use the convenience setter
  
  // console.log(blocInstance.title); // "Nouveau Titre du Bloc"
  // console.log(blocInstance.images); // "[\"new-image.png\",\"another-image.jpg\"]" (raw string updated)