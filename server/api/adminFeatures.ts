import api from '../config';

interface createEmployeePayload {
  name: string;
  email: string;
  department: string;
  role_id: string;
  salary: number;
  emp_code: string;
}

export const createEmployee = async (payload: createEmployeePayload) => {
  try {
    const token = localStorage.getItem('token');
    const response = api.post('api/auth/employee/registration', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getEmployeeList = async (params = {}) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('/api/employee/list', {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getEmpData = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = api.get(`api/employee/data/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};
