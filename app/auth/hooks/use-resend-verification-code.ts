import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { authService } from '@auth/services';
import { QueryKeys } from '@auth/config';

export const useResendVerificationCodeMutation = (
	options?: UseMutationOptions<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>
) => {
	return useMutation<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>({
		mutationKey: [QueryKeys.RESEND_VERIFICATION_CODE],
		mutationFn: (user: ResendVerificationCodeBody) => authService.resendVerificationCode(user),
		...options,
	});
};
