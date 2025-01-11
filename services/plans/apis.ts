import { apiClient } from "@/lib/api";

export const getPackages = async (): Promise<RootResponse<TPackage[]>> => {
  try {
    const response = await apiClient.get("/get-package-with-plan");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOffers = async (): Promise<Root<TOffer[]>> => {
  try {
    const response = await apiClient.get("/all-offers");
    return response.data;
  } catch (error) {
    throw error;
  }
};
