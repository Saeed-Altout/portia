import { useQuery } from "@tanstack/react-query";

import { getFaqs } from "@/api/root/get-faqs";

export const useGetFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => getFaqs(),
  });
};
