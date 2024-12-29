import { apiClient } from "@/api/config";

export const getPorts = async (): Promise<RootResponse<IPorts>> => {
  try {
    const res = await apiClient.get("/get-ports");
    return res.data;
  } catch (error) {
    throw error;
  }
};
