'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { loginSchema } from '@auth/schemas';
import { useLoginMutation } from '@auth/hooks';

import cookieStorageService from '@/services/cookie-storage';

export const useLogin = (form: any) => {
	const router = useRouter();
	const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
	const { mutateAsync: loginMutation, isPending } = useLoginMutation();

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		try {
			await loginMutation(data);
			isRememberMe && cookieStorageService.setMemoryUser(data, { days: 30 });
			!isRememberMe && cookieStorageService.removeMemoryUser();
			toast.success('Login successful');
			router.refresh();
		} catch (error) {
			toast.error('Login failed');
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