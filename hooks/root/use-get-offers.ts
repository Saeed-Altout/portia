import { useQuery } from "@tanstack/react-query";
import { getOffers } from "@/api";

export const useGetOffers = () => {
  return useQuery({
    queryKey: ["get-offers"],
    queryFn: () => getOffers(),
  });
};
