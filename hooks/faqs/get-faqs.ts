import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { _axios } from "@/lib/axios";

const key = ["faq"];
const endpoint = "/get-faq";

export const useGetFaqsQuery = (
  options?: UseQueryOptions<FaqsRootObj<Faq[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: key,
    queryFn: () =>
      _axios.get<FaqsRootObj<Faq[]>>(endpoint).then((res) => res.data),
    ...options,
  });
};
