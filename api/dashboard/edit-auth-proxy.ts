import { apiClient } from "@/api/config";

export const editAuthProxy = async (
  values: IEditAuthProxyRequest
): Promise<IEditAuthProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_AUTH_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
