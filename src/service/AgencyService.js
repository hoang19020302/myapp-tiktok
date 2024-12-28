import * as httpRequest from '~/utils';

export const agencyInfoService = async (phoneNumber) => {
    try {
        const res = await httpRequest.get(`agency/info?phoneNumber=${phoneNumber}`, {},
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

export const removeAgencyService = async (phoneNumber) => {
    try {
        const res = await httpRequest.put(`agency/delete-agency?phoneNumber=${phoneNumber}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorRemoveAgency: ', error);
    }
}