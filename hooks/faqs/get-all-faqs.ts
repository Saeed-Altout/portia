import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";

const key = ["all-faqs"];
const endpoint = "/get-all-faqs";

export const useGetAllFaqsQuery = (
  options?: UseQueryOptions<FaqsRootObj<Faq[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: key,
    staleTime: 1000,
    queryFn: () =>
      _axios.get<FaqsRootObj<Faq[]>>(endpoint).then((res) => res.data),
    ...options,
  });
};
