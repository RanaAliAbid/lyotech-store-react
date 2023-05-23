import { ApiData, ApiError } from "@/pages/api/types";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const signIn = async (req: NextApiRequest, res: NextApiResponse<ApiData | ApiError>) => { // check merchant twofa

    res.setHeader('Allow', "POST");

    try {
        let data = req.body

        var config = {
            method: 'POST',
            url: process.env.API_URL + "users/login",
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-APIKEY': process.env.API_KEY
            },
        };
        let result = await axios(config);

        res.status(200).json({ message: "Sucessfull login", status: true })
    } catch (error) {
        res.status(400).json({ message: "An internal error occured", status: false })
    }
}

const UsersController = {
    signIn
}

export default UsersController