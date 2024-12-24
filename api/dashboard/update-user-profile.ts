import { apiClient } from "@/api/config";

export const updateUserProfile = async (
  values: IUpdateUserProfileRequest
): Promise<IUpdateUserProfileResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_UPDATE_USER_PROFILE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
