import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';

export const useGetAllFaqsQuery = (options?: UseQueryOptions<FaqsRootObj<Faq[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: [QueryKeys.GET_ALL_FAQS],
		queryFn: () => _axios.get<FaqsRootObj<Faq[]>>(process.env.NEXT_PUBLIC_ALL_FAQ_ENDPOINT!).then((res) => res.data),
		...options,
	});
};
