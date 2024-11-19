import { useQuery } from "@tanstack/react-query";
import { getAllCities } from "@/api";

export const useGetAllCities = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-all-cities"],
    queryFn: () => getAllCities(params),
    enabled: !!params.pkg_id && !!params.country_id,
  });
};
