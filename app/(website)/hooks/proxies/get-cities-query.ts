import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetCitiesQuery = (options?: UseQueryOptions<City[], AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-cities'],
		queryFn: () => websiteService.getCities(),
		...options,
	});
};
