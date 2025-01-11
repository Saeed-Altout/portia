import { apiClient } from "@/lib/api";

export const getDataMap = async (): Promise<IGetDataMap> => {
  try {
    const response = await apiClient.get("/map");
    return response.data;
  } catch (error) {
    throw error;
  }
};
