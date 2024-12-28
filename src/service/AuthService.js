import * as httpRequest from '~/utils';

export const loginService = async (phoneNumber, password) => {
    try {
        const res = await httpRequest.post('auth/authenticate', {
            phoneNumber: phoneNumber,
            password: password,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.log('errorLogin: ', error);
    }
};

export const refreshTokenService = async (refreshToken) => {
    try {
        const res = await httpRequest.post('auth/refresh-token', {
            refreshToken: refreshToken,
        });
        return res.data;
    } catch (error) {
        console.log('errorRefreshToken: ', error);
    }
}

export const registerService = async (firstName, lastName, phoneNumber, password, role) => {
    try {
        const res = await httpRequest.post('auth/register', {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
            role: role,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.log('errorRegister: ', error);
    }
}

export const checkPhoneService = async (phoneNumber) => {
    try {
        const res = await httpRequest.get(`auth/check-phone?phoneNumber=${phoneNumber}`, {});
        return res.data;
    } catch (error) {
        console.log('errorCheckPhone: ', error);
    }
}

export const activeAccountService = async (token) => {
    try {
        const res = await httpRequest.get(`auth/active-account?token=${token}`, {});
        return res.data;
    } catch (error) {
        console.log('errorActiveAccount: ', error);
    }
}

export const forgotPasswordService = async (phoneNumber) => {
    try {
        const res = await httpRequest.post('auth/forgot-password', {
            phoneNumber: phoneNumber,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                },
        });
        return res.data;
    } catch (error) {
        console.log('errorForgotPassword: ', error);
    }
}

export const logoutService = async () => {
    try {
        const res = await httpRequest.post(
            'auth/logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            },
        );
        return res.data;
    } catch (error) {
        console.log('errorLogout: ', error.message);
    }
};