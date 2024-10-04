import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetFeaturesOffersQuery = (options?: UseQueryOptions<FeaturesOffers, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-features-offers'],
		queryFn: () => websiteService.getFeaturesOffers(),
		...options,
	});
};
