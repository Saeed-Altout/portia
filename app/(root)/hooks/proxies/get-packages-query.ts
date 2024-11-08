import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@/app/(root)/services";

export const useGetPackagesQuery = (
  options?: UseQueryOptions<RootObj<Package[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-packages"],
    queryFn: () => websiteService.getPackages(),
    ...options,
  });
};
