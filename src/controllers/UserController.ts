import { ApiData, ApiError } from "@/pages/api/types";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_KEY } from "../../app.config";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number;
            isAdmin?: boolean;
            authToken?: string;
        };
    }
}

export const signIn = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {

    res.setHeader('Allow', "POST");

    try {
        let data = req?.body

        const config = {
            method: 'POST',
            url: process.env.API_URL + "users/login",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-APIKEY': process.env.API_KEY
            },
        };
        const result = await axios(config);

        if (result.status == 200) {
            req.session.user = {
                id: 1,
                isAdmin: false,
                authToken: ""
            }
            await req.session.save();
        }

        res.status(200).json({ message: "Sucessfull login", status: true })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "An internal error occured", status: false })
    }
}

export const checkUserToken = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {

    res.setHeader('Allow', "POST");

    try {
        let data = req.body

        const config = {
            method: 'POST',
            url: process.env.API_URL + "users/login",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-APIKEY': API_KEY
            },
        };
        const result = await axios(config);

        res.status(200).json({ message: "Cart data", status: true })
    } catch (error) {
        res.status(400).json({ message: "An internal error occured", status: false })
    }
}