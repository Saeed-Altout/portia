import { useQuery } from "@tanstack/react-query";
import { getPorts } from "./apis";

export const useGetPortsQuery = () => {
  return useQuery({
    queryKey: ["ports"],
    queryFn: () => getPorts(),
  });
};
