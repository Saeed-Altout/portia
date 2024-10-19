import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getCities = async ({
  pkg_id,
  country_id,
}: {
  pkg_id: number;
  country_id?: number;
}): Promise<RootObj<City[]>> => {
  const params: Record<string, any> = {
    pkg_id,
    country_id,
  };

  Object.keys(params).forEach(
    (key) =>
      (params[key] === 0 || params[key] === undefined) && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<City[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_CITIES!,
      { params }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
