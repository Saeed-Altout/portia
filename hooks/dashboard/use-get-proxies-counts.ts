import { useQuery } from "@tanstack/react-query";
import { getProxiesCounts } from "@/api";

export const useGetProxiesCounts = () => {
  return useQuery({
    queryKey: ["get-proxies-counts"],
    queryFn: () => getProxiesCounts(),
  });
};
