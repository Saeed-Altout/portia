import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getCountries = async ({
  pkg_id = 1,
}: {
  pkg_id: number;
}): Promise<RootObj<Country[]>> => {
  const params: Record<string, any> = {
    pkg_id,
  };

  Object.keys(params).forEach(
    (key) =>
      (params[key] === 0 || params[key] === undefined) && delete params[key]
  );

  try {
    const response: AxiosResponse<RootObj<Country[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_COUNTRIES!,
      { params }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
