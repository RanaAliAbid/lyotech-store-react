/////// Post data types

export type PartnerLinkData = {
    product_id: number,
    user_handover: string
}

export type SignInData = {
    email: string,
    password: string
}

export type SignUpData = {
    email: string,
    password: string,
    password_confirm: string
}

export type ForgotPasswordData = {
    email: string
}

/////// Validators Types

export type SignInDataValidator = {
    email: boolean,
    password: boolean
}

export type SignUpDataValidator = {
    email: boolean,
    password: boolean,
    password_confirm: boolean
}