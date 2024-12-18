import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getActiveProxies } from "@/api";

export const useGetActiveProxies = () => {
  return useQuery({
    queryKey: ["get-active-proxies"],
    queryFn: () => getActiveProxies(),
    placeholderData: keepPreviousData,
  });
};
