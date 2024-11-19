import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const addProxy = async (
  values: AddProxyRequestType
): Promise<AddProxyResponseType> => {
  try {
    const response: AxiosResponse<AddProxyResponseType> = await _axios.post(
      "/create-proxy",
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
