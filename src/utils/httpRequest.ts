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
    data,
    userToken
}: {
    api_url: string
    route: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    data?: any,
    userToken?: string | undefined | null
}): Promise<ResponseApiType> => {
    const url = `${api_url}/public${route}`;
    // console.log('url', url);
    const config = {
        method,
        maxBodyLength: Infinity,
        url: url,
        data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(userToken && { Authorization: `Bearer ${userToken}` }),
        },
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
        console.log(error?.response?.data?.message || error.message);
        return {
            status: false,
            message: error?.response?.data?.message || error.message || 'Erreur inconnue',
            code: error?.response?.status || 500,
            data: {},
        };
    }
};
