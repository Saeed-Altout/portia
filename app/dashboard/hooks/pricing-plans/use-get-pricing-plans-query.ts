import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { dashboardService } from "@dashboard/services";

export const useGetPricingPlansQuery = (
  options?: UseQueryOptions<RootObj<PricingPlan[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-pricing-plans"],
    queryFn: () => dashboardService.getPricingPlans(),
    ...options,
  });
};
