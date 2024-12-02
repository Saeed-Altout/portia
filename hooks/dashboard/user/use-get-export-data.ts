import { useQuery } from "@tanstack/react-query";
import { getExportData } from "@/api";

export const useGetExportData = () => {
  return useQuery({
    queryKey: ["get-export"],
    queryFn: () => getExportData(),
  });
};
