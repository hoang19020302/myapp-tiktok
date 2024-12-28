import * as httpRequest from '~/utils';

export const agenciesByPhoneService = async (phoneNumber) => {
    try {
        const res = await httpRequest.get(`manager/agencies-by-phone?phoneNumber=${phoneNumber}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorAgenciesByPhone: ', error);
    }
}

export const posInfoService = async (phone) => {
    try {
        const res = await httpRequest.get(`manager/pos-info?phone=${phone}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorAgenciesByPhone: ', error);
    }
}

export const shippersByPhone = async (phoneNumberg) => {
    try {
        const res = await httpRequest.get(`manager/shippers-by-phone?phoneNumber=${phoneNumberg}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorShippersByPhone: ', error);
    }
}