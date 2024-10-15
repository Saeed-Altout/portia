import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getPricingPlans } from "@/app/dashboard/features/api/pricing-plans";

export const useGetPricingPlansQuery = (
  options?: UseQueryOptions<PricingPlanResponseType, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-pricing-plans"],
    queryFn: () => getPricingPlans(),
    ...options,
  });
};
