import * as z from 'zod';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginSchema } from '@auth/schemas';
import { useHandleResponse, useLoginMutation } from '@auth/hooks';
import cookieStorageService from '@/services/cookie-storage';

export const useLogin = (form: any) => {
	const router = useRouter();
	const { handleSuccess, handleError } = useHandleResponse();

	const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
	const { mutateAsync: loginMutation, isPending } = useLoginMutation();

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		try {
			const res = await loginMutation(data);
			isRememberMe && cookieStorageService.setMemoryUser(data, { days: 30 });
			!isRememberMe && cookieStorageService.removeMemoryUser();
			handleSuccess(res.message);
			router.refresh();
		} catch (error) {
			handleError(error);
		}
	};

	useEffect(() => {
		const currentMemoryUser = cookieStorageService.getMemoryUser();
		if (currentMemoryUser) {
			form.setValue('email', currentMemoryUser.email);
			form.setValue('password', currentMemoryUser.password);
			setIsRememberMe(true);
		}
	}, [form]);

	return { onSubmit, isPending, isRememberMe, setIsRememberMe };
};
