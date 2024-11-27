import { useQuery } from "@tanstack/react-query";
import { getAllFaqs } from "@/api";

export const useGetAllFaqs = () => {
  return useQuery({
    queryKey: ["get-all-faqs"],
    queryFn: () => getAllFaqs(),
  });
};
