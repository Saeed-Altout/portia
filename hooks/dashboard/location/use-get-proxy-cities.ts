import { useQuery } from "@tanstack/react-query";

import { getProxyCities } from "@/api";

export const useGetProxyCities = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-proxy-cities", params],
    queryFn: () => getProxyCities(params),
    enabled: !!params.pkg_id && !!params.country_id,
  });
};
