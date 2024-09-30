import * as z from 'zod';

import { registerSchema } from '@auth/schemas';
import { useHandleResponse, useRegisterMutation } from '@auth/hooks';

export const useRegister = () => {
	const { handleSuccess, handleError } = useHandleResponse();
	const { mutateAsync: registerMutation, isPending } = useRegisterMutation();

	const onSubmit = async (data: z.infer<typeof registerSchema>) => {
		try {
			const res = await registerMutation(data);
			handleSuccess(res.message, `/auth/verify-email?email=${data.email}`);
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
