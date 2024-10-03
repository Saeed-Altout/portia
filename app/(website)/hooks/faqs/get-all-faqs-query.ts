import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetAllFaqsQuery = (options?: UseQueryOptions<RootObj<Faq[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-all-faqs'],
		queryFn: () => websiteService.getAllFaqs(),
		...options,
	});
};
