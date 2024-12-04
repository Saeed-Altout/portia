import { useQuery } from "@tanstack/react-query";
import { getPorts } from "@/api";

export const useGetPorts = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["get-ports", params],
    queryFn: () => getPorts(params),
    enabled: !!+params.id,
  });
};
