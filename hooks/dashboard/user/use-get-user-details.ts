import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "@/api";

export const useGetUserDetails = () => {
  return useQuery({
    queryKey: ["get-user-details"],
    queryFn: () => getUserDetails(),
  });
};
