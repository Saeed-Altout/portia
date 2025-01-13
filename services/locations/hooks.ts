import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProxyLocations } from "@/services/locations";

export const useGetProxyLocationsQuery = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: () => getProxyLocations(),
    placeholderData: keepPreviousData,
  });
};
