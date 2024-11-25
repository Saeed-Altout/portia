import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getPorts = async (
  params: Record<string, any>
): Promise<RootObj<string[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  try {
    const response: AxiosResponse<RootObj<string[]>> = await _axios.get(
      "/get-ports",
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
