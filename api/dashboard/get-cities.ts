import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getCities = async (
  params: Record<string, any>
): Promise<RootObj<City[]>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response: AxiosResponse<RootObj<City[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_CITIES!,
      { params: { ...filteredParams } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
