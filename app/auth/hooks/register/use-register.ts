'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { toast } from 'sonner';

import { registerSchema } from '@auth/schemas';
import { useRegisterMutation } from '@auth/hooks';

export const useRegister = () => {
	const router = useRouter();
	const { mutateAsync: registerMutation, isPending } = useRegisterMutation();

	const onSubmit = async (data: z.infer<typeof registerSchema>) => {
		try {
			const res = await registerMutation(data);
			toast.success(res.message || 'Register is successful.');
			router.push(`/auth/verify-email?email=${data.email}`);
		} catch (error) {
			toast.error('Register failed');
		}
	};

	return { onSubmit, isPending };
};
