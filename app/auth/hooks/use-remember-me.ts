'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import cookieStorage from '@/services/cookie-storage-service';

export const useRememberMe = (form: any) => {
	const [isRememberMe, setIsRememberMe] = useState(false);

	useEffect(() => {
		const currentMemoryUser = cookieStorage.getMemoryUser();
		if (currentMemoryUser) {
			form.setValue('email', currentMemoryUser.email);
			form.setValue('password', currentMemoryUser.password);
			setIsRememberMe(true);
		}
	}, [form]);

	return { isRememberMe, setIsRememberMe };
};
