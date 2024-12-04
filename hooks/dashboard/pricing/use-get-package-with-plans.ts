import { useQuery } from "@tanstack/react-query";
import { getPackageWithPlans } from "@/api";

export const useGetPackageWithPlans = () => {
  return useQuery({
    queryKey: ["get-package-with-plans"],
    queryFn: () => getPackageWithPlans(),
  });
};
