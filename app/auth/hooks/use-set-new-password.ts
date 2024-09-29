import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { authService } from '@auth/services';
import { QueryKeys } from '@auth/config';

export const useSetNewPasswordMutation = (
	options?: UseMutationOptions<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>
) => {
	return useMutation<SetNewPasswordResponse, AxiosError<ErrorResponse>, SetNewPasswordBody>({
		mutationKey: [QueryKeys.SET_NEW_PASSWORD],
		mutationFn: (user: SetNewPasswordBody) => authService.setNewPassword(user),
		...options,
	});
};
