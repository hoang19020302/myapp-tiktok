import * as httpRequest from '~/utils';

export const getAnUserService = async (nickname) => {
    try {
        const res = await httpRequest.get('users/' + nickname, {});
        return res.data;
    } catch (error) {
        console.log('errorGetCurrent: ', error.message);
    }
};
