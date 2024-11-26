import { AxiosResponse } from "axios";
import { apiClient } from "@/api/config";

export const editAuthProxy = async (
  values: EditAuthProxyRequestType
): Promise<EditAuthProxyRequestType> => {
  try {
    const response: AxiosResponse<EditAuthProxyRequestType> =
      await apiClient.post("/edit-password-proxy", values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
