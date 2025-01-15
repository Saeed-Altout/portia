import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOffersPlans, getPackagesPlans } from "@/services/plans";

export const useGetOffersPlansQuery = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: () => getOffersPlans(),
    placeholderData: keepPreviousData,
    refetchInterval: 1000 * 10,
  });
};

export const useGetPackagesPlansQuery = () => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackagesPlans(),
    placeholderData: keepPreviousData,
  });
};
