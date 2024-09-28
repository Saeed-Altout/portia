import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useConfirmVerificationCodeMutation = (
	options?: UseMutationOptions<ConfirmVerificationCodeResponse, AxiosError<ErrorResponse>, ConfirmVerificationCodeBody>
) => {
	return useMutation<ConfirmVerificationCodeResponse, AxiosError<ErrorResponse>, ConfirmVerificationCodeBody>({
		mutationKey: [QueryKeys.CONFIRM_VERIFICATION_CODE],
		mutationFn: (user: ConfirmVerificationCodeBody) => authService.confirmVerificationCode(user),
		...options,
	});
};
