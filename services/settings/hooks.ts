import { useQuery } from "@tanstack/react-query";
import { getPorts } from "./apis";

export const useGetPortsQuery = (params: Record<string, any>) => {
  return useQuery({
    queryKey: ["ports", params],
    queryFn: () => getPorts(params),
    enabled: !!+params.id,
  });
};
