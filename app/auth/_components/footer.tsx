import Link from 'next/link';

interface FooterProps {
	message: string;
	label: string;
	href: string;
}

export const Footer = ({ message, label, href }: FooterProps) => {
	return (
		<p className='w-fit mx-auto text-sm'>
			{message}
			<Link href={href} className='ml-2 hover:underline text-primary font-medium'>
				{label}
			</Link>
		</p>
	);
};
