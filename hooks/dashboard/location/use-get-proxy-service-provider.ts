import { useQuery } from "@tanstack/react-query";
import { getProxyServiceProviders } from "@/api";

export const useGetProxyServiceProvider = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-proxy-service-provider", params],
    queryFn: () => getProxyServiceProviders(params),
    enabled: !!params.pkg_id && !!params.country_id && !!params.city_id,
  });
};
