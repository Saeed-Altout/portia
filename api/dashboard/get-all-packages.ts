import { apiClient } from "@/api/config";

export const getAllPackages = async (): Promise<IGetAllPackagesResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_ALL_PACKAGES!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
