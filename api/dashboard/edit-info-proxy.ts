import { apiClient } from "@/api/config";

export const editInfoProxy = async (
  values: IEditInfoProxyRequest
): Promise<IEditInfoProxyResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_EDIT_INFO_PROXY!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
