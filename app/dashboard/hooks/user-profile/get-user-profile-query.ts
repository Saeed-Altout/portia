import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { dashboardService } from '@dashboard/services';

export const useGetUserProfileQuery = (options?: UseQueryOptions<UserProfile, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-user-profile'],
		queryFn: () => dashboardService.getUserProfile(),
		...options,
	});
};
