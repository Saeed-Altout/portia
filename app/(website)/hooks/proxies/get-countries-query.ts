import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@website/services";

export const useGetCountriesQuery = ({
  pkg_id,
  ...options
}: {
  pkg_id: number;
  options?: UseQueryOptions<RootObj<Country[]>, AxiosError<ErrorResponse>>;
}) => {
  return useQuery({
    queryKey: ["get-countries", `pkg_id=${pkg_id}`],
    queryFn: () => websiteService.getCountries({ pkg_id }),
    enabled: pkg_id !== 0,
    ...options,
  });
};
