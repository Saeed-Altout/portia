import { getIpRotations } from "@/api/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useGetIpRotations = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-ip-rotations", params],
    queryFn: () => getIpRotations(params),
    enabled: !!params.pkg_id && !!params.city_id,
  });
};
