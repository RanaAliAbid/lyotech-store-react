const stringRegex = /[&\/\\#,+()@$~%.'":*?!<>{}]/g;

export const validateSpacialChar = (text: string): boolean => {
    try {
        return stringRegex.test(text);
    } catch (error) {
        return false;
    }
};

export const replaceSpecialChar = (text: string): string => {
    try {
        return text.replaceAll(stringRegex, '');
    } catch (error) {
        return text;
    }
};

export const formCheckEmptyFields = (
    data: any
): any => {
    const dataValidate: any = {
        shippingAddress: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true, // optional
            city: true, // optional
            country: true,
            state: true, // optional
            type: true, //optional
            postalCode: true,
        },
        billingAddress: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true, // optional
            city: true, // optional
            country: true,
            state: true, // optional
            type: true, //optional
        },
    };

    dataValidate.shippingAddress.firstName = replaceSpecialChar(data.shippingAddress.firstName) == '' ? false : true;
    dataValidate.shippingAddress.lastName = replaceSpecialChar(data.shippingAddress.lastName) == '' ? false : true;
    dataValidate.shippingAddress.email = data.shippingAddress.email == '' ? false : true;
    dataValidate.shippingAddress.phone = replaceSpecialChar(data.shippingAddress.phone) == '' ? false : true;
    dataValidate.shippingAddress.address = replaceSpecialChar(data.shippingAddress.address) == '' ? false : true;
    dataValidate.shippingAddress.city = replaceSpecialChar(data.shippingAddress.city) == '' ? false : true;
    dataValidate.shippingAddress.country = replaceSpecialChar(data.shippingAddress.country) == '' ? false : true;
    dataValidate.shippingAddress.state = replaceSpecialChar(data.shippingAddress.state) == '' ? false : true;
    dataValidate.shippingAddress.postalCode = replaceSpecialChar(data.shippingAddress.postalCode) == '' ? false : true;

    return dataValidate;
};
