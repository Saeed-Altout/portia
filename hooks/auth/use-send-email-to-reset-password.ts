import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useSendEmailToResetPasswordMutation = (
	options?: UseMutationOptions<SendEmailToResetPasswordResponse, AxiosError<ErrorResponse>, SendEmailToResetPasswordBody>
) => {
	return useMutation<SendEmailToResetPasswordResponse, AxiosError<ErrorResponse>, SendEmailToResetPasswordBody>({
		mutationKey: [QueryKeys.SEND_EMAIL_TO_RESET_PASSWORD],
		mutationFn: (email: SendEmailToResetPasswordBody) => authService.sendEmailToResetPassword(email),
		...options,
	});
};
