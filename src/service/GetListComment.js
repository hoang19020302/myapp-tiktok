import * as httpRequest from '~/utils';

export const GetListComment = async (idVideo) => {
    try {
        const res = await httpRequest.get('videos/' + idVideo + '/comments', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log('Success get Comment');
        return res.data;
    } catch (error) {
        console.log('errorGetComment: ', error.message);
    }
};
