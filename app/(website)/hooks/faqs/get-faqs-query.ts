import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { websiteService } from '@website/services';

export const useGetFaqsQuery = (options?: UseQueryOptions<FaqsRootObj<Faq[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-faqs'],
		queryFn: () => websiteService.getFaqs(),
		...options,
	});
};
