// import moment from 'moment';
// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isUserAuthenticated = async (request: NextRequest) => {
    try {
        const authToken = request.cookies.get("userConnected")?.value ?? "false";

        if(authToken == "true") {
            if(request.nextUrl.pathname.startsWith('/auth')) {
                return true
            }
         }else {
            if(request.nextUrl.pathname.startsWith('/auth')) {
                return false
            }

            if(request.nextUrl.pathname.startsWith('/profile')) {
                return true
            }

            if(request.nextUrl.pathname.startsWith('/orders')) {
                return true
            }

            if(request.nextUrl.pathname.startsWith('/trackorder')) {
                return true
            }

            if(request.nextUrl.pathname.startsWith('/wishlist')) {
                return true
            }
         }

        return false;

    } catch (error) {
        return false
    }
}

export const SessionAccessMiddleware = {
    isUserAuthenticated
}