import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@website/services";

export const useGetCitiesQuery = ({
  pkg_id,
  country_id,
  ...options
}: {
  pkg_id: number;
  country_id: number;
  options?: UseQueryOptions<RootObj<City[]>, AxiosError<ErrorResponse>>;
}) => {
  return useQuery({
    queryKey: ["get-cities", `pkg_id=${pkg_id}`, `country_id=${country_id}`],
    queryFn: () => websiteService.getCities({ pkg_id, country_id }),
    enabled: pkg_id !== 0 && country_id !== 0,
    ...options,
  });
};
