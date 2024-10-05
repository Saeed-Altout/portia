import * as z from 'zod';
import { newPasswordSchema } from '@auth/schemas';
import { useHandleResponse, useSetNewPasswordMutation } from '@auth/hooks';

export const useSetNewPassword = (token: string) => {
	const { handleSuccess, handleError } = useHandleResponse();
	const { mutateAsync: setNewPasswordMutation, isPending } = useSetNewPasswordMutation();

	const onSubmit = async (data: z.infer<typeof newPasswordSchema>) => {
		try {
			const res = await setNewPasswordMutation({ ...data, token });
			handleSuccess(res.message, '/auth/password-reset');
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
