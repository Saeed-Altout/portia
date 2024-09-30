import Link from 'next/link';

interface ResendButtonProps {
	label?: string;
	href?: string;
	message?: string;
}

export const ResendButton = ({
	label = 'Click to resend',
	href = '/auth/reset',
	message = 'Didn’t receive the email?',
}: ResendButtonProps) => {
	return (
		<p className='text !text-sm text-center'>
			{message}
			<Link href={href} className='hover:underline text-primary font-medium text-nowrap ml-2'>
				{label}
			</Link>
		</p>
	);
};
