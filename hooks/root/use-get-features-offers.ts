import { useQuery } from "@tanstack/react-query";
import { getFeaturesOffer } from "@/api";

export const useGetFeaturesOffers = () => {
  return useQuery({
    queryKey: ["get-features-offers"],
    queryFn: () => getFeaturesOffer(),
  });
};
