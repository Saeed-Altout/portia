import { useQuery } from "@tanstack/react-query";
import { getDataMap } from "@/services/map";

export const useGetDataMapQuery = () => {
  return useQuery({
    queryKey: ["data-map"],
    queryFn: () => getDataMap(),
  });
};
