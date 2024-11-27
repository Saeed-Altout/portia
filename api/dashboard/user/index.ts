import { apiClient } from "@/api/config";

export const updateUserProfile = async (values: IUpdateUserProfileRequest): Promise<IUpdateUserProfileResponse> => {
  try {
    const response = await apiClient.post(process.env.NEXT_PUBLIC_UPDATE_USER_PROFILE!, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserBalance = async (): Promise<IGetUserBalanceResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_USER_BALANCE!);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async (): Promise<IGetUserDetailsResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_USER_DETAILS!);
    return response.data;
  } catch (error) {
    throw error;
  }
};