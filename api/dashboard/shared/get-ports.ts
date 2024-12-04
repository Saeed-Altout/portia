import { apiClient } from "@/api/config";

export const getPorts = async (
  params: Record<string, any>
): Promise<IGetPortsResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== 0
    )
  );

  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_GET_PORTS!, {
      params: { ...filteredParams },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
