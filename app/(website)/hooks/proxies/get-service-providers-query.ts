import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@website/services";

export const useGetServiceProviderQuery = ({
  pkg_id,
  city_id,
  country_id,
  ...options
}: {
  pkg_id: number;
  city_id: number;
  country_id: number;
  options?: UseQueryOptions<
    RootObj<ServiceProvider[]>,
    AxiosError<ErrorResponse>
  >;
}) => {
  return useQuery({
    queryKey: [
      "get-service-provider",
      `pkg_id=${pkg_id}`,
      `city_id=${city_id}`,
      `country_id=${country_id}`,
    ],
    queryFn: () =>
      websiteService.getServiceProvider({ pkg_id, city_id, country_id }),
    enabled: pkg_id !== 0 && city_id !== 0 && country_id !== 0,
    ...options,
  });
};
