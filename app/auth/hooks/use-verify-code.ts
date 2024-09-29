import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { authService } from '@auth/services';
import { QueryKeys } from '@auth/config';

export const useVerifyCodeMutation = (
	options?: UseMutationOptions<VerifyCodeMutationResponse, AxiosError<ErrorResponse>, VerifyCodeMutationBody>
) => {
	return useMutation<VerifyCodeMutationResponse, AxiosError<ErrorResponse>, VerifyCodeMutationBody>({
		mutationKey: [QueryKeys.VERIFY_CODE],
		mutationFn: (data: VerifyCodeMutationBody) => authService.verifyCode(data),
		...options,
	});
};
