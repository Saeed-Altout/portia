import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { authService } from '@auth/services';
import { QueryKeys } from '@auth/config';

export const useSendResetEmailMutation = (
	options?: UseMutationOptions<SendResetEmailResponse, AxiosError<ErrorResponse>, SendResetEmailBody>
) => {
	return useMutation<SendResetEmailResponse, AxiosError<ErrorResponse>, SendResetEmailBody>({
		mutationKey: [QueryKeys.SEND_RESET_EMAIL],
		mutationFn: (email: SendResetEmailBody) => authService.sendResetEmail(email),
		...options,
	});
};
