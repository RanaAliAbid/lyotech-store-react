// import moment from 'moment';
// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isUserAuthenticated = (request: NextRequest) => {
    try {
        const authToken = request.cookies.get("userConnected")?.value ?? "false";

        if(authToken == "true") {
            if(request.nextUrl.pathname.startsWith('/auth')) {
                return true
            }
         }else {
            if(request.nextUrl.pathname.startsWith('/profile')) {
                return true
            }

            if(request.nextUrl.pathname.startsWith('/cart')) {
                return true
            }

            if(request.nextUrl.pathname.startsWith('/checkout')) {
                return true
            }
         }

        return false;

    } catch (error) {
        return false
    }
}

// const isTokenExpired = (token: string) => {
//     let timePart = token?.split(".");
//     if (timePart && timePart[1]) {
//         const decodedToken = JSON.parse(atob(timePart[1]));
//         const currentTime = Date.now();
//         let tokeExpiredTime = decodedToken.exp * 1000;
//         if (tokeExpiredTime <= currentTime) {
//             return true;
//         }

//         // response.cookies.set("tokenExpiredTime", tokeExpiredTime.toString())
//         return false;
//     }
//     return true;
// }

export const SessionAccessMiddleware = {
    isUserAuthenticated
}