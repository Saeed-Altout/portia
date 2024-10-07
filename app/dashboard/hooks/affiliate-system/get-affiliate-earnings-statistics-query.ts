import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { dashboardService } from '@dashboard/services';

export const useGetAffiliateEarningsStatisticsQuery = (
	options?: UseQueryOptions<RootObj<EarningsStatistics>, AxiosError<ErrorResponse>>
) => {
	return useQuery({
		queryKey: ['get-affiliate-earnings-statistics'],
		queryFn: () => dashboardService.getAffiliateEarningsStatistics(),
		...options,
	});
};
