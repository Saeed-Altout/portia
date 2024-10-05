import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { authService } from '@auth/services';

export const useLoginWithGoogleMutation = (options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>) => {
	return useMutation<void, AxiosError<ErrorResponse>, void>({
		mutationKey: ['login-with-google'],
		mutationFn: () => authService.loginWithGoogle(),
		...options,
	});
};
