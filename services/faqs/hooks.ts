import { useQuery } from "@tanstack/react-query";
import { getTopFaqs, getFaqs } from "@/services/faqs";

export const useGetFaqsQuery = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => getFaqs(),
  });
};

export const useGetTopFaqsQuery = () => {
  return useQuery({
    queryKey: ["top-faqs"],
    queryFn: () => getTopFaqs(),
  });
};
