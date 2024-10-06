import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { websiteService } from '@website/services';

export const useGetPackagesQuery = (options?: UseQueryOptions<Package[], AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-packages'],
		queryFn: () => websiteService.getPackages(),
		...options,
	});
};
