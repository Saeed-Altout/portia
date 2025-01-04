import { apiClient } from "@/api/config";

export const manageProxy = async (
  values: IManageProxyRequest
): Promise<IManageProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_MANAGE_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
