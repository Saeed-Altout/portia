import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@website/services";

export const useGetIpRotationsQuery = ({
  pkg_id,
  country_id,
  city_id,
  service_provider_id,
  ...options
}: {
  pkg_id: number;
  country_id?: number;
  city_id?: number;
  service_provider_id?: number;
  options?: UseQueryOptions<RootObj<string[]>, AxiosError<ErrorResponse>>;
}) => {
  return useQuery({
    queryKey: [
      "get-ip-rotations",
      `pkg_id=${pkg_id}`,
      `country_id=${country_id}`,
      `city_id=${city_id}`,
      `service_provider_id=${service_provider_id}`,
    ],
    queryFn: () =>
      websiteService.getIpRotations({
        pkg_id,
        country_id,
        city_id,
        service_provider_id,
      }),
    enabled:
      (pkg_id !== 0 && city_id !== 0 && country_id !== 0) ||
      service_provider_id !== 0,

    ...options,
  });
};
