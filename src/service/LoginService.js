import * as httpRequest from '~/utils';

export const loginService = async (email, password) => {
    try {
        const res = await httpRequest.post('auth/login', {
            email: email,
            password: password,
        });
        return res;
    } catch (error) {
        console.log('errorLogin: ', error);
    }
};
