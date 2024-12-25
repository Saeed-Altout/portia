import { getWayPayment } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetWayPayment = () => {
  return useQuery({
    queryKey: ["get-way-payment"],
    queryFn: () => getWayPayment(),
  });
};
