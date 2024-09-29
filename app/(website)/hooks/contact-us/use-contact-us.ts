import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { _axios } from '@/lib/axios';

import { QueryKeys } from '@website/config';
import { websiteService } from '@website/services';

export const useSendContactMessageMutation = (
	options?: UseMutationOptions<ContactMessageResponse, AxiosError<ErrorResponse>, ContactMessageBody>
) => {
	return useMutation<ContactMessageResponse, AxiosError<ErrorResponse>, ContactMessageBody>({
		mutationKey: [QueryKeys.CONTACT_MESSAGE],
		mutationFn: (user: ContactMessageBody) => websiteService.sendContactMessage(user),
		...options,
	});
};
