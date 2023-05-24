const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}|;:'",.<>?]).{8,}$/;
const stringRegex = /[&\/\\#,+()@$~%.'":*?<>{}]/g;

export const  validatePassword = (password: string): boolean => {
    return passwordRegex.test(password)
}

export const  validateSpacialChar = (text: string): boolean => {
    return stringRegex.test(text)
}