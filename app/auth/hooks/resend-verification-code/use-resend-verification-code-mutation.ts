import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { authService } from '@auth/services';

export const useResendVerificationCodeMutation = (
	options?: UseMutationOptions<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>
) => {
	return useMutation<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>({
		mutationKey: ['resend-verification-code'],
		mutationFn: (email: ResendVerificationCodeBody) => authService.resendVerificationCode(email),
		...options,
	});
};
