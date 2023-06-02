import { ApiData, ApiError } from "@/pages/api/types";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_HOST, API_KEY, ironOptions } from "../../app.config";
import { AuthUser } from "@/contexts/auth.types";
import jwt from 'jsonwebtoken';

export const getUserSession = async (req: NextApiRequest, res: NextApiResponse<AuthUser | ApiError>) => {
    // try {
    //     const user = req.session?.user ?? {id: 0, authToken: "", isAdmin: false}
    //     res.status(200).json(user)
    // } catch (error) {
    //     res.status(400).json({ message: "An internal error occured.", status: false })
    // }
}

export const signIn = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {
    res.setHeader('Allow', "POST");

    try {
        let data = req?.body

        const config = {
            method: 'POST',
            url: API_HOST + "/v1/users/login",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // 'X-API-KEY': process.env.API_KEY
            },
        };
        const result = await axios(config);

        if (result.status == 200) {
            if(result.data.code == 200){

                // const token = jwt.sign({test: "frank"}, ironOptions.password);

                res.status(200).json({ message: "Sucessfull login", status: true })

            }else{
                res.status(400).json({ message: result.data?.errors?.mssg, status: false })
            }
        }

    } catch (error: any) {
        console.log("Catch error login ", error?.response?.data)
        res.status(400).json({ message: error?.response?.data?.errors?.msg, status: false })
    }
}

export const signUp = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {
    res.setHeader('Allow', "POST");

    try {
        let data = req?.body

        const config = {
            method: 'POST',
            url: API_HOST + "/v1/users/signup",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // 'X-API-KEY': process.env.API_KEY
            },
        };
        const result = await axios(config);

        if (result.status == 200) {
            if(result.data?.code == 200) {

                res.status(200).json({ message: "Sucessfull register", status: true })
            }
        }

    } catch (error: any) {
        console.log("Catch error register ", error)
        res.status(400).json({ message: error?.response?.data?.msg ?? "" +" "+ error?.response?.data?.errors?.msg ?? "", status: false })
    }
}

export const checkUserToken = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {
    res.setHeader('Allow', "POST");

    try {
        let data = req.body

        const config = {
            method: 'POST',
            url: API_HOST + "/v1/users/login",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_KEY
            },
        };
        const result = await axios(config);

        res.status(200).json({ message: "Cart data", status: true })
    } catch (error) {
        res.status(400).json({ message: "An internal error occured", status: false })
    }
}

export const forgotPassword = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => {
    res.setHeader('Allow', "POST");

    try {
        let data = req.body

        const config = {
            method: 'POST',
            url: API_HOST + "/v1/users/forgot_password",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_KEY
            },
        };
        const result = await axios(config);

        res.status(200).json({ message: "data", status: true })
    } catch (error) {
        res.status(400).json({ message: "An internal error occured", status: false })
    }
}