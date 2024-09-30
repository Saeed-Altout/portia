import * as z from 'zod';

import { verifyCodeSchema } from '@auth/schemas';
import { useHandleResponse, useVerifyCodeMutation } from '@auth/hooks';

export const useVerifyCode = (email: string) => {
	const { handleSuccess, handleError } = useHandleResponse();
	const { mutateAsync: verifyCodeMutation, isPending } = useVerifyCodeMutation();

	const onSubmit = async (data: z.infer<typeof verifyCodeSchema>) => {
		try {
			const res = await verifyCodeMutation({ code: data.code, email: email });
			handleSuccess(res.message, '/auth/email-confirmed', res.access_token);
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
