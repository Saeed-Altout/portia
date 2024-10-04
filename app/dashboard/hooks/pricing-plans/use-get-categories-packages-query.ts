import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { dashboardService } from '@dashboard/services';

export const useGetCategoriesPackagesQuery = (
	options?: UseQueryOptions<RootObj<CategoryPackage[]>, AxiosError<ErrorResponse>>
) => {
	return useQuery({
		queryKey: ['get-categories-packages'],
		queryFn: () => dashboardService.getCategoriesPackages(),
		...options,
	});
};
