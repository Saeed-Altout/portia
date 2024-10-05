import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { authService } from '@auth/services';

export const useSetNewPasswordMutation = (
	options?: UseMutationOptions<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>
) => {
	return useMutation<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>({
		mutationKey: ['set-new-password'],
		mutationFn: (data: SetNewPasswordBody) => authService.setNewPassword(data),
		...options,
	});
};
