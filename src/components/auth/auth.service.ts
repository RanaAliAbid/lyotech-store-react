import axios from "axios";
import { PartnerLinkData } from "./auth.types";
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