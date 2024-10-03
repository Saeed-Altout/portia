import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useOffersQuery = (options?: UseQueryOptions<RootObj<Offer[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-offers'],
		queryFn: () => websiteService.getOffers(),
		...options,
	});
};
