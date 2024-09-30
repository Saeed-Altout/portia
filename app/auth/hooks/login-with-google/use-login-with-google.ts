import { useHandleResponse, useLoginWithGoogleMutation } from '@auth/hooks';

export const useLoginWithGoogle = () => {
	const { handleError } = useHandleResponse();
	const { mutateAsync: loginWithGoogleMutation, isPending } = useLoginWithGoogleMutation();

	async function onSubmit() {
		try {
			await loginWithGoogleMutation();
		} catch (error) {
			handleError(error);
		}
	}

	return { onSubmit, isPending };
};
