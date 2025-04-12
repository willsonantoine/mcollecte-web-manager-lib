export interface IContactMessage {
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