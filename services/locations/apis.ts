import { apiClient } from "@/lib/api";

export const getProxyLocations = async (): Promise<
  RootResponse<ILocation[]>
> => {
  try {
    const response = await apiClient.get(
      process.env.NEXT_PUBLIC_GET_ALL_PROXY_LOCATION!
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
