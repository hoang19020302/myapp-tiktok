import * as httpRequest from '~/utils';

export const shipperInfo = async (phoneNumber) => {
    try {
        const res = await httpRequest.get(`shipper/info?phoneNumber=${phoneNumber}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorShipperInfo: ', error);
    }
}

export const removeShipper = async (phoneNumber) => {
    try {
        const res = await httpRequest.delete(`shipper/delete-shipper?phoneNumber=${phoneNumber}`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorRemoveShipper: ', error);
    }
}