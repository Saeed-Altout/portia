import { getAllLocations } from "@/api/dashboard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllLocations = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-all-locations", params],
    queryFn: () => getAllLocations(params),
    placeholderData: keepPreviousData,
  });
};
