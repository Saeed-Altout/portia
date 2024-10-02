import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import cookieStorage from '@/services/cookie-storage';

export const useHandleResponse = () => {
	const router = useRouter();

	const handleSuccess = (message: string | string[], redirectTo?: string, token?: string) => {
		if (token) {
			cookieStorage.setAccessToken(token);
		}

		if (Array.isArray(message)) {
			message.forEach((msg) => toast.success(msg));
		} else {
			toast.success(message);
		}

		redirectTo && router.push(redirectTo);
		router.refresh();
	};

	const handleError = (error: AxiosError | unknown, errorMessage: string = 'Something went wrong!') => {
		if (error instanceof AxiosError && error.response) {
			const serverMessage = error.response.data?.message;

			if (Array.isArray(serverMessage)) {
				serverMessage.forEach((msg) => toast.error(msg));
			} else {
				toast.error(serverMessage || errorMessage);
			}
		} else {
			toast.error(errorMessage);
		}
	};

	return { handleSuccess, handleError };
};
