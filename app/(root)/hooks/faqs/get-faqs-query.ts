import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { websiteService } from "@/app/(root)/services";

export const useGetFaqsQuery = (
  options?: UseQueryOptions<RootObj<Faq[]>, AxiosError<ErrorResponse>>
) => {
  return useQuery({
    queryKey: ["get-faqs"],
    queryFn: () => websiteService.getFaqs(),
    ...options,
  });
};
