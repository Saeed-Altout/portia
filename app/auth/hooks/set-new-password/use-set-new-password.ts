'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { newPasswordSchema } from '@auth/schemas';
import { useSetNewPasswordMutation } from '@auth/hooks';

export const useSetNewPassword = (token: string) => {
	const router = useRouter();
	const { mutateAsync: setNewPasswordMutation, isPending } = useSetNewPasswordMutation();

	const onSubmit = async (data: z.infer<typeof newPasswordSchema>) => {
		try {
			const res = await setNewPasswordMutation({ ...data, token });
			toast.success(res.message);
			router.push('/auth/password-reset');
		} catch (error) {
			toast.error('Set new password is failed!');
		}
	};

	return { onSubmit, isPending };
};