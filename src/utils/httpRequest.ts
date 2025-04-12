import axios from 'axios';

export type ResponseApiType = {
    status: boolean;
    message: string;
    code: number;
    data: any;
};

export const HttpRequest = async ({
    api_url,
    method,
    route,
}: {
    api_url: string
    route: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
}): Promise<ResponseApiType> => {
    const config = {
        method,
        maxBodyLength: Infinity,
        url: `${api_url}/public${route}`,
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
