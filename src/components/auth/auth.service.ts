import axios from "axios";
import { ForgotPasswordData, PartnerLinkData, SignInData, SignUpData } from "./auth.types";
import { APP_HOST } from "../../../app.config";

export const verifyUserHandover = async (params: PartnerLinkData) => {
    try {
        const config = {
            method: 'POST',
            url: APP_HOST + "/api/v1/auth/checktoken",
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return axios(config);

    } catch (error) {
        return null
    }
}

export const validateUserSession = async () => {
    try {
        const config = {
            method: 'GET',
            url: APP_HOST + "/api/v1/auth/user_session",
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return axios(config);

    } catch (error) {
        return null
    }
}

export const signInUser = async (params: SignInData) => {
    try {
        const config = {
            method: 'POST',
            url: APP_HOST + "/api/v1/auth/signin",
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return axios(config);

    } catch (error) {
        return null
    }
}

export const signUpUser = async (params: SignUpData) => {
    try {
        const config = {
            method: 'POST',
            url: APP_HOST + "/api/v1/auth/signup",
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return axios(config);

    } catch (error) {
        return null
    }
}

export const fogotPasswordUser = async (params: ForgotPasswordData) => {
    try {
        const config = {
            method: 'POST',
            url: APP_HOST + "/api/v1/auth/forgot_password",
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return axios(config);

    } catch (error) {
        return null
    }
}