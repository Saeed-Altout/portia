import { apiClient } from "@/api/config";

export const getTablesData = async (): Promise<IGetTablesData> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_TABLES!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
