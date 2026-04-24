import api from '../config';

interface RegistrationPayload {
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const registration = async (payload: RegistrationPayload) => {
  try {
    const response = await api.post('api/auth/register', payload);
    return response.data;
  } catch (error: any) {
    console.log('Registration Failed: ', error.data || error.message);
    throw error;
  }
};

export const login = async (payload: LoginPayload) => {
  try {
    const response = await api.post('/api/auth/login', payload);
    return response.data;
  } catch (error: any) {
    console.log('Registration Failed: ', error.data || error.message);
    throw error;
  }
};

export const socialLogin = async (token: string) => {
  try {
    const response = await api.post('api/auth/social-login', {
      token: token,
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin-allow-popups',
        },
      ],
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
