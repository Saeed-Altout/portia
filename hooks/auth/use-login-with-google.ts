import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useLoginWithGoogleMutation = (options?: UseMutationOptions<void, AxiosError<ErrorResponse>, void>) => {
	return useMutation<void, AxiosError<ErrorResponse>, void>({
		mutationKey: [QueryKeys.LOGIN_WITH_GOOGLE],
		mutationFn: () => authService.loginWithGoogle(),
		...options,
	});
};
