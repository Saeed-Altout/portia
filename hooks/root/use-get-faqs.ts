import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "@/api";

export const useGetFaqs = () => {
  return useQuery({
    queryKey: ["get-faqs"],
    queryFn: () => getFaqs(),
  });
};
