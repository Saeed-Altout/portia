import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOffers, getPackages } from "./apis";

export const useGetOffersQuery = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: () => getOffers(),
    placeholderData: keepPreviousData,
  });
};

export const useGetPackagesQuery = () => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackages(),
  });
};
