import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useResendVerificationCodeMutation = (
	options?: UseMutationOptions<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>
) => {
	return useMutation<ResendVerificationCodeResponse, AxiosError<ErrorResponse>, ResendVerificationCodeBody>({
		mutationKey: [QueryKeys.RESEND_VERIFICATION_CODE],
		mutationFn: (user: ResendVerificationCodeBody) => authService.resendVerificationCode(user),
		...options,
	});
};
