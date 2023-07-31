const stringRegex = /[&\/\\#,+()@$~%.'":*?!<>{}]/g;

export const validateSpacialChar = (text: string): boolean => {
    return stringRegex.test(text);
};

export const replaceSpecialChar = (text: string): string => {
    return text.replaceAll(stringRegex, '');
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

    dataValidate.shippingAddress.firstName = data.shippingAddress.firstName == '' ? false : true;
    dataValidate.shippingAddress.lastName = data.shippingAddress.lastName == '' ? false : true;
    dataValidate.shippingAddress.email = data.shippingAddress.email == '' ? false : true;
    dataValidate.shippingAddress.phone = data.shippingAddress.phone == '' ? false : true;
    dataValidate.shippingAddress.address = data.shippingAddress.address == '' ? false : true;
    dataValidate.shippingAddress.city = data.shippingAddress.city == '' ? false : true;
    dataValidate.shippingAddress.country = data.shippingAddress.country == '' ? false : true;
    dataValidate.shippingAddress.state = data.shippingAddress.state == '' ? false : true;

    return dataValidate;
};
