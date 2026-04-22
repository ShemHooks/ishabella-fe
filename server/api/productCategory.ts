import api from '../config';

export const createProductCategory = async (data: { name: string }) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('api/product/category/make', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};
