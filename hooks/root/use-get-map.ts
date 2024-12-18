import { useQuery } from "@tanstack/react-query";
import { getDataMap } from "@/api/root";

export const useGetDataMap = () => {
  return useQuery({
    queryKey: ["get-data-map"],
    queryFn: () => getDataMap(),
  });
};
