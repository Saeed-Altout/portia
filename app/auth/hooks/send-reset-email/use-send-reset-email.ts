'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { sendResetEmailSchema } from '@auth/schemas';
import { useSendResetEmailMutation } from '@auth/hooks';

export const useSendResetEmail = () => {
	const router = useRouter();
	const { mutateAsync: sendResetEmailMutation, isPending } = useSendResetEmailMutation();

	const onSubmit = async (data: z.infer<typeof sendResetEmailSchema>) => {
		try {
			const res = await sendResetEmailMutation(data);
			toast.success(res.message);
			router.push(`/auth/verify-reset-email?email=${data.email}`);
		} catch (error) {
			toast.error('Send reset email is failed!');
		}
	};

	return { onSubmit, isPending };
};
