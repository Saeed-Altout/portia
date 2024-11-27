import { useQuery } from "@tanstack/react-query";
import { getPricingPlans } from "@/api";

export const useGetPricingPlans = () => {
  return useQuery({
    queryKey: ["get-pricing-plans"],
    queryFn: () => getPricingPlans(),
  });
};
