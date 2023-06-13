export const APP_HOST = (process.env.ENV_TYPE == "dev") ? process.env.APP_DEV_HOST : ((process.env.ENV_TYPE == "sandbox") ? process.env.APP_DEV_HOST : process.env.APP_LIVE_HOST)

export const PROXY_HOST = (process.env.PROXY_ENV_TYPE == "dev") ? process.env.APP_DEV_HOST : ((process.env.PROXY_ENV_TYPE == "sandbox") ? process.env.APP_DEV_HOST : process.env.APP_LIVE_HOST)

export const API_HOST = (process.env.API_ENV_TYPE == "dev") ? process.env.API_DEV_HOST : ((process.env.API_ENV_TYPE == "sandbox") ? process.env.API_SANDBOX_HOST : process.env.API_LIVE_HOST)

export const API_KEY = (process.env.API_ENV_TYPE == "dev") ? process.env.API_KEY_DEV : ((process.env.API_ENV_TYPE == "sandbox") ? process.env.API_KEY_SANDBOX : process.env.API_KEY_LIVE)

export const ironOptions = {
    cookieName: process.env.APP_NAME ?? "",
    password: process.env.COOKIE_PASSWORD ?? "$z\JW?QM,WT#a5PF2z_^Sv(UvHVcD(w8P4?.",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: true,
    },
};