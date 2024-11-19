import { getAllLocations } from "@/api/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useGetAllLocations = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-all-locations"],
    queryFn: () => getAllLocations(params),
  });
};
