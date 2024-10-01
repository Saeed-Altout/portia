import { useRouter } from 'next/navigation';
import { useHandleResponse, useLogoutMutation } from '@auth/hooks';

import localStorage from '@/services/local-storage';
import cookieStorageService from '@/services/cookie-storage';

export const useLogout = () => {
	const router = useRouter();
	const { handleError } = useHandleResponse();
	const { mutateAsync: logoutMutation, isPending } = useLogoutMutation();

	const onSubmit = async () => {
		try {
			await logoutMutation();
			cookieStorageService.clearAll();
			localStorage.clearAll();
			router.refresh();
		} catch (error) {
			handleError(error);
		}
	};

	return { onSubmit, isPending };
};
