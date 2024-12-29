import { useQuery } from "@tanstack/react-query";
import { getUserBalance } from "./apis";

export const useGetUserBalanceQuery = () => {
  return useQuery({
    queryKey: ["user-balance"],
    queryFn: () => getUserBalance(),
  });
};
