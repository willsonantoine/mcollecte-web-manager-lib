import axios from 'axios';
import { URL_API } from './constant';

export type ResponseApiType = {
    status: boolean;
    message: string;
    code: number;
    data: any;
};

export const HttpRequest = async ({
    method,
    route,
}: {
    route: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
}): Promise<ResponseApiType> => {
    const config = {
        method,
        maxBodyLength: Infinity,
        url: `${URL_API}/public${route}`,
    };

    try {
        const result: any = await axios.request(config);
 
        return {
            status: true, 
            message: result.data?.message || 'Requête réussie',
            code: result.status,
            data: result.data?.data || {},
        };
    } catch (error: any) {
        console.log(error)
        return {
            status: false,
            message: error?.response?.data?.message || error.message || 'Erreur inconnue',
            code: error?.response?.status || 500,
            data: {},
        };
    }
};
