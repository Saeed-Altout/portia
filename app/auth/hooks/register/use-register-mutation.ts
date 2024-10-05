import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { authService } from '@auth/services';

export const useRegisterMutation = (
	options?: UseMutationOptions<RegisterResponse, AxiosError<ErrorResponse>, RegisterBody>
) => {
	return useMutation<RegisterResponse, AxiosError<ErrorResponse>, RegisterBody>({
		mutationKey: ['register'],
		mutationFn: (user: RegisterBody) => authService.register(user),
		...options,
	});
};
