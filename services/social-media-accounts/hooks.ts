import { useQuery } from "@tanstack/react-query";
import { getSocialMediaAccounts } from "./apis";

export const useGetSocialMediaAccountsQuery = () => {
  return useQuery({
    queryKey: ["social-media-accounts"],
    queryFn: () => getSocialMediaAccounts(),
  });
};
