import { useQuery } from "@tanstack/react-query";
import { getCost } from "@/features/dashboard/api/get-cost";

export const useGetCost = ({ pkg_id }: { pkg_id: number }) => {
  return useQuery({
    queryKey: ["get-cost"],
    queryFn: () => getCost({ pkg_id }),
    enabled: pkg_id !== 0,
  });
};
