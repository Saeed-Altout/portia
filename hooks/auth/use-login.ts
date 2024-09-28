import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

import cookieStorage from '@/services/cookie-storage-service';

export const useLoginMutation = (options?: UseMutationOptions<LoginResponse, AxiosError<ErrorResponse>, LoginBody>) => {
	return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginBody>({
		mutationKey: [QueryKeys.LOGIN],
		mutationFn: (user: LoginBody) => authService.login(user),
		onSuccess: (res: LoginResponse) => {
			cookieStorage.setAccessToken(res.access_token, {
				days: +res.expires_in.split(' ')[0],
			});
		},
		...options,
	});
};
