import * as z from 'zod';
import { sendResetEmailSchema } from '@auth/schemas';
import { useHandleResponse, useSendResetEmailMutation } from '@auth/hooks';

export const useSendResetEmail = () => {
	const { handleSuccess, handleError } = useHandleResponse();

	const { mutateAsync: sendResetEmailMutation, isPending } = useSendResetEmailMutation();

	const onSubmit = async (data: z.infer<typeof sendResetEmailSchema>) => {
		try {
			const res = await sendResetEmailMutation(data);
			handleSuccess(res.message, `/auth/verify-reset-email?email=${data.email}`);
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
