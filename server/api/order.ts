import api from '../config';

export const createOrder = async (items: any[]) => {
  try {
    const response = await api.post('api/order/create', {
      items,
    });

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
