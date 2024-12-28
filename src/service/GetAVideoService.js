import * as httpRequest from '~/utils';

export const GetAVideo = async (uuidVideo) => {
    try {
        const res = await httpRequest.get('videos/' + uuidVideo, {});
        console.log('Success get a video: ', res.data);
        return res.data;
    } catch (error) {
        console.log('errorGet A Video: ', error);
    }
};
