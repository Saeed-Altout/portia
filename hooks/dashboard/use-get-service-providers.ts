import { useQuery } from "@tanstack/react-query";
import { getServicesProvider } from "@/api";

export const useGetServiceProvider = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-service-provider", params],
    queryFn: () => getServicesProvider(params),
    enabled: !!params.pkg_id && !!params.country_id && !!params.city_id,
  });
};
