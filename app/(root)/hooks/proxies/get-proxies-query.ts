import { AxiosError } from "axios";
import {
  keepPreviousData,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { websiteService } from "@/app/(root)/services";

export const useGetAllProxiesQuery = ({
  pkg_id,
  country_id,
  city_id,
  service_provider_id,
  rotation_time,
  offset,
  ...options
}: {
  pkg_id: number;
  offset: number;
  country_id?: number;
  city_id?: number;
  service_provider_id?: number;
  rotation_time?: number;
  options?: UseQueryOptions<RootObj<proxy>, AxiosError<ErrorResponse>>;
}) => {
  return useQuery({
    queryKey: [
      "get-proxies",
      `pkg_id=${pkg_id}`,
      `offset=${offset}`,
      `country_id=${country_id}`,
      `city_id=${city_id}`,
      `service_provider_id=${service_provider_id}`,
      `rotation_time=${rotation_time}`,
    ],
    queryFn: () =>
      websiteService.getAllProxies({
        pkg_id,
        offset,
        country_id,
        city_id,
        service_provider_id,
        rotation_time,
      }),
    enabled: pkg_id !== 0,
    placeholderData: keepPreviousData,
    ...options,
  });
};
