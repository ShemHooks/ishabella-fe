import api from '../config';

export const getUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = api.get('api/employee/name', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getRoleList = async () => {
  try {
    const reponse = await api.get('api/app/role/list');

    return reponse;
  } catch (error: any) {
    throw error;
  }
};

export const getProductCategories = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('api/app/product/category/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
};
