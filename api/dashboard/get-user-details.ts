import { apiClient } from "@/api/config";

export const getUserDetails = async (): Promise<IGetUserDetailsResponse> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_USER_DETAILS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
