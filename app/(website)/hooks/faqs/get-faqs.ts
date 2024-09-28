import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';

export const useGetFaqsQuery = (options?: UseQueryOptions<FaqsRootObj<Faq[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: [QueryKeys.GET_FAQS],
		queryFn: () => _axios.get<FaqsRootObj<Faq[]>>(process.env.NEXT_PUBLIC_FAQ_ENDPOINT!).then((res) => res.data),
		...options,
	});
};
