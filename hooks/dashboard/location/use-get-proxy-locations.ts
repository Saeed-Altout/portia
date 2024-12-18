import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProxyLocations } from "@/api";

export const useGetProxyLocations = () => {
  return useQuery({
    queryKey: ["get-proxy-locations"],
    queryFn: () => getProxyLocations(),
    placeholderData: keepPreviousData,
  });
};
