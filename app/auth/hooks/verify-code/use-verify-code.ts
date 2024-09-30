'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { verifyCodeSchema } from '@auth/schemas';
import { useVerifyCodeMutation } from '@auth/hooks';
import cookieStorage from '@/services/cookie-storage';

export const useVerifyCode = (email: string) => {
	const router = useRouter();
	const { mutateAsync: verifyCodeMutation, isPending } = useVerifyCodeMutation();

	const onSubmit = async (data: z.infer<typeof verifyCodeSchema>) => {
		try {
			const res = await verifyCodeMutation({ code: data.code, email: email });
			cookieStorage.setAccessToken(res.access_token);
			toast.success(res.message);
			router.push('/auth/email-confirmed');
		} catch (error) {
			toast.error('Verify code is failed');
		}
	};

	return { onSubmit, isPending };
};
