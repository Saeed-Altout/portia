import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getAllProxies = async ({
  pkg_id,
  country_id,
  city_id,
  service_provider_id,
  rotation_time,
  offset = 0,
}: {
  pkg_id: number;
  offset: number;
  country_id?: number;
  city_id?: number;
  service_provider_id?: number;
  rotation_time?: number;
}): Promise<RootObj<proxy>> => {
  const params: Record<string, any> = {
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
    rotation_time,
  };

  Object.keys(params).forEach(
    (key) =>
      (params[key] === 0 || params[key] === undefined) && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<proxy>> = await _axios.get(
      `${process.env.NEXT_PUBLIC_PROXIES_LOCATIONS!}?offset=${offset}`,
      { params }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
