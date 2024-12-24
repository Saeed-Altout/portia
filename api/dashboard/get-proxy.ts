import { apiClient } from "@/api/config";

export const getProxyById = async (id: number): Promise<IGetProxyResponse> => {
  try {
    const response = await apiClient.get(
      `${process.env.NEXT_PUBLIC_GET_PROXY!}/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
