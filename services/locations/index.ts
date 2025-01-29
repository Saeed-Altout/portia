import { apiClient } from "@/lib/api";

export const getProxyLocations = async (): Promise<
  ApiResponse<ILocation[]>
> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_PROXY_LOCATIONS!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
