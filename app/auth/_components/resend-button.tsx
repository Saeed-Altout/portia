'use client';

import { useResendVerificationCode } from '@auth/hooks';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

interface ResendButtonProps {
	label?: string;
	message?: string;
}

export const ResendButton = ({ label = 'Click to resend', message = 'Didn’t receive the email?' }: ResendButtonProps) => {
	const { onSubmit, isPending } = useResendVerificationCode();
	const params = useSearchParams();
	const email = params.get('email');

	return (
		<div className='flex items-center justify-center'>
			<p className='text !text-sm text-center text-nowrap'>{message}</p>
			<Button
				variant='link'
				className='px-0 hover:underline !text-primary font-medium text-nowrap ml-2'
				onClick={() => onSubmit(email || '')}
				disabled={isPending}
			>
				{label}
			</Button>
		</div>
	);
};
