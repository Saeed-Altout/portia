import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";

const faqsKey = "all-faqs";
const endpoint = "/get-all-faqs";

export const useGetAllFaqsQuery = (
  options?: UseQueryOptions<FaqsRootObj<Faq[]>, HttpError>
) => {
  const key = [faqsKey];

  return useQuery({
    queryKey: key,
    staleTime: 1000,
    queryFn: () =>
      _axios.get<FaqsRootObj<Faq[]>>(endpoint).then((res) => res.data),
    ...options,
  });
};
