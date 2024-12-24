import { apiClient } from "@/api/config";

export const getDataMap = async (): Promise<IGetDataMap> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_MAP!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
