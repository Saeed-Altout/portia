import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { dashboardService } from '@dashboard/services';

export const useGetCategoriesPlansQuery = (options?: UseQueryOptions<RootObj<CategoryPlan[]>, AxiosError<ErrorResponse>>) => {
	return useQuery({
		queryKey: ['get-categories-plans'],
		queryFn: () => dashboardService.getCategoriesPlans(),
		...options,
	});
};
