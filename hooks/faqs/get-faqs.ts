import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";

const faqsKey = "faq";
const endpoint = "/get-faq";

export const useGetFaqsQuery = (
  options?: UseQueryOptions<FaqsRootObj<Faq[]>, HttpError>
) => {
  const key = [faqsKey];

  return useQuery({
    queryKey: key,
    queryFn: () =>
      _axios.get<FaqsRootObj<Faq[]>>(endpoint).then((res) => res.data),
    ...options,
  });
};
