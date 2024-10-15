import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getUserDetails } from "@/app/dashboard/features/api/user-details";

export const useGetUserDetailsQuery = (
  options?: UseQueryOptions<UserDetails, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-user-details"],
    queryFn: () => getUserDetails(),
    ...options,
  });
};
