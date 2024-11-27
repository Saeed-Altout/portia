import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProxyLocations } from "@/api";

export const useGetProxyLocations = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-proxy-locations", params],
    queryFn: () => getProxyLocations(params),
    placeholderData: keepPreviousData,
  });
};
