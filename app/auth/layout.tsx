import { EmailProvider } from '@/providers/auth/email-provider';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<EmailProvider>
			<div className='flex flex-row justify-center items-start min-h-screen w-full'>{children}</div>
		</EmailProvider>
	);
}
