import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetCountriesQuery = (options?: UseQueryOptions<Country[], AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-countries'],
		queryFn: () => websiteService.getCountries(),
		...options,
	});
};
