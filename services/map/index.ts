import { apiClient } from "@/lib/api";

export const getDataMap = async (): Promise<ApiMapResponse<IMapData[]>> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_DATA_MAP!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
