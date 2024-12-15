import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOffersPackage } from "@/api";

export const useGetOffersPackage = () => {
  return useQuery({
    queryKey: ["get-offers-package"],
    queryFn: () => getOffersPackage(),
    staleTime: 0,
    refetchInterval: 5000,
    placeholderData: keepPreviousData,
  });
};
