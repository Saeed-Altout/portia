import { AxiosResponse } from "axios";
import { apiClient } from "@/api/config";

export const fixProxy = async (
  values: FixProxyRequestType
): Promise<FixProxyResponseType> => {
  try {
    const response: AxiosResponse<FixProxyResponseType> = await apiClient.post(
      "/fix-proxy",
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
