import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getInactiveProxies } from "@/api";

export const useGetInactiveProxies = () => {
  return useQuery({
    queryKey: ["get-inactive-proxies"],
    queryFn: () => getInactiveProxies(),
    placeholderData: keepPreviousData,
  });
};
