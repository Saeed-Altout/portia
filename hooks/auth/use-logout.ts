import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useLogoutMutation = (options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>) => {
	return useMutation<void, AxiosError<ErrorResponse>, void>({
		mutationKey: [QueryKeys.LOGOUT],
		mutationFn: () => authService.logout(),
		...options,
	});
};
