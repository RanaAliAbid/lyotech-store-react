export const APP_HOST = (process.env.ENV_TYPE == "dev") ? process.env.APP_DEV_HOST : process.env.APP_LIVE_HOST

export const API_HOST = (process.env.ENV_TYPE == "dev") ? process.env.API_DEV_HOST : process.env.API_LIVE_HOST

export const API_KEY = (process.env.ENV_TYPE == "dev") ? process.env.API_KEY_DEV : process.env.API_KEY_LIVE