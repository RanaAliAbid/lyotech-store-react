import axios from "axios";

const GetRequest = (url: string, token?: string) => {
    try {
        const config = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
        };

        return axios(config);
    } catch (error) {
        return null
    }
}

const PostRequest = (url: string, data: any, token?: string) => {
    try {
        const config = {
            method: 'POST',
            url: url,
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
        };

        return axios(config);
    } catch (error) {
        return null
    }
}

const DeleteRequest = (url: string, token?: string) => {
    try {
        const config = {
            method: 'DELETE',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
        };

        return axios(config);
    } catch (error) {
        return null
    }
}

const PutRequest = (url: string, data: any, token?: string) => {
    try {
        const config = {
            method: 'PUT',
            url: url,
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
        };

        return axios(config);
    } catch (error) {
        return null
    }
}

export const ProxyService = {
    GetRequest,
    PostRequest,
    PutRequest,
    DeleteRequest
}