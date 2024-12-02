import { useQuery } from "@tanstack/react-query";
import { getTablesData } from "@/api";

export const useGetTablesData = () => {
  return useQuery({
    queryKey: ["get-tables"],
    queryFn: () => getTablesData(),
  });
};
