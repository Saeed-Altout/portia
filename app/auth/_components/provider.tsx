'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';

import { useLoginWithGoogle } from '@auth/hooks';

interface ProviderProps {
	isLoading: boolean;
}

export const Provider = ({ isLoading }: ProviderProps) => {
	const { onSubmit, isPending } = useLoginWithGoogle();

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
