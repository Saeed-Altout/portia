import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getPorts = async ({
  id,
}: {
  id: number;
}): Promise<RootObj<string[]>> => {
  const params: Record<string, any> = {
    id,
  };

  try {
    const response: AxiosResponse<RootObj<string[]>> = await _axios.get(
      "/get-ports",
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
