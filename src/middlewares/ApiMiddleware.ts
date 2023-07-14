import { compare, hash } from 'bcrypt';
import { NextRequest } from 'next/server';
import { HASH_SALT } from '../../app.config';
import { getLocalStorage, hash256 } from '@/utils/app.utils';

const validateUserAgent = async (request: NextRequest) => {
    // const requestKey = request?.params?.hashKey ?? "";
    // const hashKey = request;

    // console.log("🚀 ~ file: middleware.ts:89 ~ testString:", hashKey)
}

export const ApiMiddleware = {
    validateUserAgent,
}