import api from '../config';

export const productCategoryLP = async () => {
  try {
    const response = await api.get('api/landing/page/get/category');
    return response;
  } catch (error: any) {
    throw error;
  }
};

export const featuredProductLP = async () => {
  try {
    const response = await api.get('api/landing/page/get/featured/products');
    return response;
  } catch (error: any) {
    throw error;
  }
};
