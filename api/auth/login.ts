import { apiClient } from "@/api/config";

export const login = async (values: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_LOGIN!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
