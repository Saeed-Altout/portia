import { apiClient } from "@/api/config";

export const fixProxy = async (
  values: IFixProxyRequest
): Promise<IFixProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_FIX_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
