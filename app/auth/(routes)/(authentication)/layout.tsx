import { Metadata } from 'next';

import { Sidebar } from './_components/sidebar';
import { Header } from './_components/header';

export const metadata: Metadata = {
	title: 'Authentication',
	description: 'Secure login and authentication page for Portia.io',
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-row min-h-screen w-full'>
			<Sidebar />
			<div className='w-full lg:w-1/3 max-w-[400px] mx-auto space-y-8 lg:space-y-0'>
				<Header />
				<div className='flex flex-col justify-center items-center lg:h-screen'>{children}</div>
			</div>
		</div>
	);
}
