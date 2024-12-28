import * as httpRequest from '~/utils';

export const LikeVideoService = async (idVideo) => {
    try {
        const res = await httpRequest.post(
            'videos/' + idVideo + '/like',
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            },
        );
        console.log('successLikeVideo: ', res);
        return res.data;
    } catch (error) {
        console.log('errorLikeVideo: ', error);
    }
};
