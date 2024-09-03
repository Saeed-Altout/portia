export default function VerificationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='flex flex-col items-center justify-start min-h-screen w-full py-24'>{children}</div>;
}
