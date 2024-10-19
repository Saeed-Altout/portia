import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getIpRotations = async ({
  pkg_id,
  country_id,
  city_id,
  service_provider_id,
  rotation_time,
}: {
  pkg_id: number;
  country_id?: number;
  city_id?: number;
  service_provider_id?: number;
  rotation_time?: number;
}): Promise<RootObj<string[]>> => {
  const params: Record<string, any> = {
    pkg_id,
    country_id,
    city_id,
    service_provider_id,
    rotation_time,
  };

  Object.keys(params).forEach(
    (key) => (params[key] === undefined || 0) && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<string[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_IP_ROTATIONS!,
      { params }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
