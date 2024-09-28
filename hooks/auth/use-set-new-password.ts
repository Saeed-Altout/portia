import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useSetNewPasswordMutation = (
	options?: UseMutationOptions<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>
) => {
	return useMutation<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>({
		mutationKey: [QueryKeys.SET_NEW_PASSWORD],
		mutationFn: (user: SetNewPasswordBody) => authService.setNewPassword(user),
		...options,
	});
};
