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

    dataValidate.firstName = data.firstName == '' ? false : true;
    dataValidate.lastName = data.lastName == '' ? false : true;
    dataValidate.email = data.email == '' ? false : true;
    dataValidate.phone = data.phone == '' ? false : true;
    dataValidate.address = data.address == '' ? false : true;
    dataValidate.city = data.city == '' ? false : true;
    dataValidate.country = data.country == '' ? false : true;
    dataValidate.state = data.state == '' ? false : true;

    return dataValidate;
};
