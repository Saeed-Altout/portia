import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getServicesProvider = async ({
  pkg_id,
  city_id,
  country_id,
}: {
  pkg_id: number;
  city_id?: number;
  country_id?: number;
}): Promise<RootObj<ServiceProvider[]>> => {
  const params: Record<string, any> = {
    pkg_id,
    city_id,
    country_id,
  };

  Object.keys(params).forEach(
    (key) =>
      (params[key] === 0 || params[key] === undefined) && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<ServiceProvider[]>> =
      await _axios.get(process.env.NEXT_PUBLIC_SERVICE_PROVIDERS!, {
        params,
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};
