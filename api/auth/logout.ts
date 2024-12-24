import { apiClient } from "@/api/config";

export const logout = async (): Promise<ILogoutRequestResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_LOGOUT!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
