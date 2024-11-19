import { useQuery } from "@tanstack/react-query";
import { getActiveProxies } from "@/api/dashboard/get-active-proxies";

export const useGetActiveProxies = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-active-proxies"],
    queryFn: () => getActiveProxies(params),
  });
};
