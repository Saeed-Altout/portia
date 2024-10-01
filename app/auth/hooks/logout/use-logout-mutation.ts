import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { authService } from '@auth/services';

export const useLogoutMutation = (options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>) => {
	return useMutation<void, AxiosError<ErrorResponse>, void>({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		...options,
	});
};
