import { useQuery } from "@tanstack/react-query";
import { getUserBalance } from "@/api";

export const useGetUserBalance = () => {
  return useQuery({
    queryKey: ["get-user-balance"],
    queryFn: () => getUserBalance(),
  });
};
