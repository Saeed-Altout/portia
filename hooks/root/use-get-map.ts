import { getDataMap } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetDataMap = () => {
  return useQuery({
    queryKey: ["get-data-map"],
    queryFn: () => getDataMap(),
  });
};
