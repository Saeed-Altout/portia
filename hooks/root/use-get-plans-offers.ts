import { useQuery } from "@tanstack/react-query";
import { getPlansOffer } from "@/api";

export const useGetPlansOffer = () => {
  return useQuery({
    queryKey: ["get-plans-offer"],
    queryFn: () => getPlansOffer(),
  });
};
