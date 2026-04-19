import api from "../config";

export interface AddStockPayload {
  warehouse_id: string;
  quantity: number;
  reference?: string;
}

export const addStock = async (productId: string, payload: AddStockPayload) => {
  try {
    const response = await api.post(
      `/api/products/${productId}/stock`,
      payload,
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
