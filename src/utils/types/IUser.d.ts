export interface IUser {
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