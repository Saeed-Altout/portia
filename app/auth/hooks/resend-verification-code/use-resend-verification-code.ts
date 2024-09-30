'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { useResendVerificationCodeMutation } from '@auth/hooks';

export const useResendVerificationCode = () => {
	const router = useRouter();
	const { mutateAsync: resendVerificationCodeMutation, isPending } = useResendVerificationCodeMutation();

	const onSubmit = async (email: string) => {
		try {
			const res = await resendVerificationCodeMutation({ email });
			toast.success(res.message);
		} catch (error) {
			toast.error('Resend verification code failed');
		}
	};

	return { onSubmit, isPending };
};
