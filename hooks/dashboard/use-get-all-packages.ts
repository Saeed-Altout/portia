import { getAllPackages } from "@/api/dashboard/get-all-pakages";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPackages = () => {
  return useQuery({
    queryKey: ["get-all-packages"],
    queryFn: () => getAllPackages(),
  });
};
