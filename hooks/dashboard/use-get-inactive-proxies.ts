import { useQuery } from "@tanstack/react-query";
import { getInActiveProxies } from "@/api/dashboard/get-inactive-proxies";

export const useGetInactiveProxies = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-in-active-proxies"],
    queryFn: () => getInActiveProxies(params),
  });
};
