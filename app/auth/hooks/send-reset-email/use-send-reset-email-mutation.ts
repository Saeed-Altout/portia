import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { _axios } from '@/lib/axios';
import { authService } from '@auth/services';

export const useSendResetEmailMutation = (
	options?: UseMutationOptions<SendResetEmailResponse, AxiosError<ErrorResponse>, SendResetEmailBody>
) => {
	return useMutation<SendResetEmailResponse, AxiosError<ErrorResponse>, SendResetEmailBody>({
		mutationKey: ['send-reset-email'],
		mutationFn: (email: SendResetEmailBody) => authService.sendResetEmail(email),
		...options,
	});
};
