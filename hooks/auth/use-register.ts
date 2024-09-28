import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';
import { QueryKeys } from '@/config';
import { authService } from '@/services/auth-service';

export const useRegisterMutation = (
	options?: UseMutationOptions<RegisterResponse, AxiosError<ErrorResponse>, RegisterBody>
) => {
	return useMutation<RegisterResponse, AxiosError<ErrorResponse>, RegisterBody>({
		mutationKey: [QueryKeys.REGISTER],
		mutationFn: (user: RegisterBody) => authService.register(user),
		...options,
	});
};
