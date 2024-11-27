import { useQuery } from "@tanstack/react-query";
import { getProxyIpRotations } from "@/api";

export const useGetProxyIpRotations = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-proxy-ip-rotations", params],
    queryFn: () => getProxyIpRotations(params),
    enabled: !!params.pkg_id && !!params.city_id,
  });
};
