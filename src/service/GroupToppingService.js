import * as httpRequest from '~/utils';

export const createGroupToppingService = async (data) => {
    try {
        const res = await httpRequest.post('topping-group/create-group-topping', data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('errorCreateGroupTopping: ', error);
    }
}