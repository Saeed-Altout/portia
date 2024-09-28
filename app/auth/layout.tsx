export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='flex flex-row justify-center items-start min-h-screen w-full'>{children}</div>;
}
