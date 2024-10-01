import * as z from 'zod';
import { formContactSchema } from '@website/schema';
import { useHandleResponse, useSendContactMessageMutation } from '@website/hooks';

export const useSendContactMessage = () => {
	const { handleSuccess, handleError } = useHandleResponse();
	const { mutateAsync: sendContactMessageMutation, isPending } = useSendContactMessageMutation();

	const onSubmit = async (data: z.infer<typeof formContactSchema>) => {
		try {
			const res = await sendContactMessageMutation(data);
			handleSuccess(res.message);
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
