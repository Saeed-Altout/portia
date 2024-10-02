import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { websiteService } from '@website/services';

export const useUpdateUserProfileMutation = (
	options?: UseMutationOptions<UpdateUserProfileResponse, AxiosError<ErrorResponse>, UpdateUserProfileBody>
) => {
	return useMutation<UpdateUserProfileResponse, AxiosError<ErrorResponse>, UpdateUserProfileBody>({
		mutationKey: ['update-user-profile'],
		mutationFn: (data: UpdateUserProfileBody) => websiteService.updateUserProfile(data),
		...options,
	});
};
