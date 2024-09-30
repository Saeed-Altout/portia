import { useHandleResponse, useResendVerificationCodeMutation } from '@auth/hooks';

export const useResendVerificationCode = () => {
	const { handleSuccess, handleError } = useHandleResponse();

	const { mutateAsync: resendVerificationCodeMutation, isPending } = useResendVerificationCodeMutation();

	const onSubmit = async (email: string) => {
		try {
			const res = await resendVerificationCodeMutation({ email });
			handleSuccess(res.message);
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
