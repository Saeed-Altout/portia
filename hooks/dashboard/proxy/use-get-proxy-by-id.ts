import { useQuery } from "@tanstack/react-query";
import { getProxyById } from "@/api";

export const useGetProxyById = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["get-proxy-by-id", id],
    queryFn: () => getProxyById(id),
    enabled: !!id,
  });
};
