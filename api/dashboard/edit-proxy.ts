import { AxiosResponse } from "axios";
import { apiClient } from "@/api/config";

export const editProxy = async (
  values: EditProxyRequestType
): Promise<EditProxyRequestType> => {
  try {
    const response: AxiosResponse<EditProxyRequestType> = await apiClient.post(
      "edite-parent-proxy",
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
