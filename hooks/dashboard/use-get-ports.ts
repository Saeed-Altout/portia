import { useQuery } from "@tanstack/react-query";
import { getPorts } from "@/api/dashboard/get-ports";

export const useGetPorts = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["get-ports"],
    queryFn: () => getPorts({ id }),
    enabled: id !== 0,
  });
};
