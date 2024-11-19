import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "@/api";

export const useGetAllCountries = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-all-countries"],
    queryFn: () => getAllCountries(params),
    enabled: !!params.pkg_id,
  });
};
