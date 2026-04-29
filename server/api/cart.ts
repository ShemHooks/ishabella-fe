import api from '../config';

interface AddCartItemPayload {
  product_id: string;
  quantity: number;
  price: number;
}

export const addItemToCart = async (payload: AddCartItemPayload) => {
  try {
    const token = localStorage.getItem('token');
    const response = api.post('api/cart/add/item', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getCartItem = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = api.get('api/cart/get/items', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const updateCartItem = async (id: string, quantity: number) => {
  const token = localStorage.getItem('token');

  return api.post(
    `api/cart/update/quantity/${id}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeCartItem = async (id: string) => {
  const token = localStorage.getItem('token');

  return api.delete(`api/cart/delete/item/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const clearCart = async () => {
  const token = localStorage.getItem('token');

  return api.delete('api/cart/clear/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
