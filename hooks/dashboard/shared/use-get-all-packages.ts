import { useQuery } from "@tanstack/react-query";
import { getAllPackages } from "@/api";

export const useGetAllPackages = () => {
  return useQuery({
    queryKey: ["get-all-packages"],
    queryFn: () => getAllPackages(),
  });
};
