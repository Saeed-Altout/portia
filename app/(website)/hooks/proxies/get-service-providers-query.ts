import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetServiceProviderQuery = (options?: UseQueryOptions<ServiceProvider[], AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-service-provider'],
		queryFn: () => websiteService.getServiceProvider(),
		...options,
	});
};
