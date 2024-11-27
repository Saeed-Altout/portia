import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getActiveProxies } from "@/api";

export const useGetActiveProxies = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-active-proxies", params],
    queryFn: () => getActiveProxies(params),
    placeholderData: keepPreviousData,
  });
};
