import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { authService } from '@auth/services';
import cookieStorage from '@/services/cookie-storage';

export const useLoginMutation = (options?: UseMutationOptions<LoginResponse, AxiosError<ErrorResponse>, LoginBody>) => {
	return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginBody>({
		mutationKey: ['login'],
		mutationFn: (user: LoginBody) => authService.login(user),
		onSuccess: (res: LoginResponse) => {
			cookieStorage.setAccessToken(res.access_token, {
				days: +res.expires_in.split(' ')[0],
			});
		},
		...options,
	});
};
