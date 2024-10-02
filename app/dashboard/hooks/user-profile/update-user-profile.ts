import * as z from 'zod';

import { getModifiedData } from '@dashboard/utils';
import { userProfileSchema } from '@dashboard/schemas';
import { useHandleResponse, useUpdateUserProfileMutation } from '@dashboard/hooks';

export const useUpdateUserProfile = () => {
	const { handleSuccess, handleError } = useHandleResponse();
	const { mutateAsync: updateUserProfileMutation, isPending } = useUpdateUserProfileMutation();

	const onSubmit = async (data: z.infer<typeof userProfileSchema>) => {
		const modifiedData = getModifiedData(data) as UpdateUserProfileBody;
		try {
			const res = await updateUserProfileMutation(modifiedData);
			handleSuccess(res.message);
		} catch (error) {
			handleError(error);
		}
	};
	return { onSubmit, isPending };
};
