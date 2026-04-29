import api from '../config';

export interface AddStockPayload {
  warehouse_id: string;
  quantity: number;
  reference?: string;
}

export const addStock = async (productId: string, payload: AddStockPayload) => {
  try {
    const response = await api.post(`/api/products/${productId}/stock`, payload);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};

export const createProduct = async (payload: FormData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('api/product/create', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getProductListing = async (keyword: string, category: string) => {
  try {
    const response = await api.get('api/product/listings', {
      params: {
        ...(keyword && { keyword }),
        ...(category && { category }),
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const token = localStorage.getItem('token');

    const response = await api.get(`/api/product/show/details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};
