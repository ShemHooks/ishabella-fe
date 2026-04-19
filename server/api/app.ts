import api from '../config';

export const getRoleList = async () => {
  try {
    const reponse = await api.get('api/app/role/list');

    return reponse;
  } catch (error: any) {
    throw error;
  }
};
