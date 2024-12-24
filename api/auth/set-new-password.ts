import { apiClient } from "@/api/config";

export const setNewPassword = async (
  values: ISetNewPasswordRequest
): Promise<ISetNewPasswordResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_SET_NEW_PASSWORD_ENDPOINT!,
      {
        password: values.password,
        password_confirmation: values.password_confirmation,
      },
      { headers: { Authorization: `Bearer ${values.token}` } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
