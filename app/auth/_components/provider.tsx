'use client';

import { toast } from 'sonner';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';

import { useLoginWithGoogleMutation } from '@auth/hooks';

interface ProviderProps {
	isLoading: boolean;
}

export const Provider = ({ isLoading }: ProviderProps) => {
	const { mutateAsync: loginWithGoogleMutation, isPending } = useLoginWithGoogleMutation();

	async function onSubmit() {
		try {
			await loginWithGoogleMutation();
		} catch (error) {
			toast.error('Login with google is failed');
		}
	}

	return (
		<Button
			type='button'
			variant='outline'
			className='w-full flex items-center justify-center gap-x-2'
			disabled={isLoading || isPending}
			onClick={onSubmit}
		>
			<FcGoogle className='h-6 w-6' />
			Sign in with Google
		</Button>
	);
};
