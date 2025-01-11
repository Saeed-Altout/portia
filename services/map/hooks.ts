import { useQuery } from "@tanstack/react-query";
import { getDataMap } from "./apis";

export const useGetDataMapQuery = () => {
  return useQuery({
    queryKey: ["data-map"],
    queryFn: () => getDataMap(),
  });
};
