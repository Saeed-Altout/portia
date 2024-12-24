import { apiClient } from "@/api/config";

export const addProxy = async (
  values: IAddProxyRequest
): Promise<IAddProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_ADD_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
