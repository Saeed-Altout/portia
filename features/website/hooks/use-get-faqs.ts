import { useQuery } from "@tanstack/react-query";

import { getFaqs } from "@/features/website/api/get-faqs";

export const useGetFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => getFaqs(),
  });
};
