import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getInactiveProxies } from "@/api";

export const useGetInactiveProxies = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-in-active-proxies"],
    queryFn: () => getInactiveProxies(params),
    placeholderData: keepPreviousData,
  });
};
