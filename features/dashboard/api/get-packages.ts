import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const getPackages = async (): Promise<RootObj<Package[]>> => {
  try {
    const response: AxiosResponse<RootObj<Package[]>> = await _axios.get(
      process.env.NEXT_PUBLIC_PACKAGES!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
