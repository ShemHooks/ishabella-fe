import api from "../config";

interface RegistrationPayload {
  email: string;
  password: string;
  password_confirmation: string;
}

export const registration = async (payload: RegistrationPayload) => {
  try {
    const response = await api.post("api/auth/register", payload);
    return response.data;
  } catch (error: any) {
    console.log("Registration Failed: ", error.data || error.message);
    throw error;
  }
};
