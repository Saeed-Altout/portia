import { _axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

interface Package {
  id: number;
  name: string;
}

export const getAllPackages = async (): Promise<RootObj<Package[]>> => {
  try {
    const response: AxiosResponse<RootObj<Package[]>> = await _axios.get(
      "/get-all-packages"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
