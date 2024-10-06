import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetProxiesQuery = (options?: UseQueryOptions<ProxyRootObj<proxy[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-proxies'],
		queryFn: () => websiteService.getProxies(),
		...options,
	});
};
