import { useQuery } from "@tanstack/react-query";
import { getUserBalance, getUser } from "./apis";

export const useGetUserBalanceQuery = () => {
  return useQuery({
    queryKey: ["user-balance"],
    queryFn: () => getUserBalance(),
  });
};
export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });
};
