import { useQuery } from "@tanstack/react-query";
import { getOffers, getOffersFeatures, getOffersPlans } from "./apis";

export const useGetOffersQuery = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: () => getOffers(),
  });
};
export const useGetOffersFeaturesQuery = () => {
  return useQuery({
    queryKey: ["offers-features"],
    queryFn: () => getOffersFeatures(),
  });
};
export const useGetOffersPlansQuery = () => {
  return useQuery({
    queryKey: ["offers-plans"],
    queryFn: () => getOffersPlans(),
  });
};
