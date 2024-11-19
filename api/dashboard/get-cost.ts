import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getCost = async ({
  pkg_id,
}: {
  pkg_id: number;
}): Promise<
  RootObj<
    {
      hours: number;
      days: number;
      price: number;
    }[]
  >
> => {
  const params: Record<string, any> = {
    pkg_id,
  };

  try {
    const response: AxiosResponse<
      RootObj<
        {
          hours: number;
          days: number;
          price: number;
        }[]
      >
    > = await _axios.get("/get-cost", {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
