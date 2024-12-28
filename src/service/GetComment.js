import * as httpRequest from '~/utils';

export const getComment = async () => {
    try {
        const res = await httpRequest.get('', {});
        return res.data.message;
    } catch (error) {
        console.log('errorGetComment: ', error);
    }
};
