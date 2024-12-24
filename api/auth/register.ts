import { apiClient } from "@/api/config";

export const register = async (
  values: IRegisterRequest
): Promise<IRegisterResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_REGISTER!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
