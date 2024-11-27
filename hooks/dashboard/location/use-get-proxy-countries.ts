import { useQuery } from "@tanstack/react-query";
import { getProxyCountries } from "@/api";

export const useGetProxyCountries = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-proxy-countries", params],
    queryFn: () => getProxyCountries(params),
    enabled: !!params.pkg_id,
  });
};
