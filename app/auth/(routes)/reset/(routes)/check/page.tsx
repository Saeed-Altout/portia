'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function CheckEmailPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none'>
			<CardHeader className='space-y-3 flex text-center px-0'>
				<div className='bg-[#B5B6F7] border-[8px] border-[#D4D4FF] w-[56px] h-[56px] flex items-center justify-center rounded-full mx-auto mb-4'>
					<Mail className='text-primary h-5 w-5' />
				</div>
				<CardTitle className='text-2xl md:text-3xl font-semibold'>Check your email</CardTitle>
				<CardDescription className='text-base font-normal w-full'>
					We sent a password reset link to <br /> <span className='font-medium'>Jafar_shamma@gmail.com</span>
				</CardDescription>
			</CardHeader>
			<CardContent className='px-0'>
				<div className='flex flex-col gap-8'>
					<Button type='submit' className='w-full' disabled={isLoading}>
						Open email app
					</Button>
					<p className='text-sm text-center'>
						Didn’t receive the email?{' '}
						<Link href='/auth/reset' className='hover:underline text-primary font-medium'>
							Click to resend
						</Link>
					</p>
					<Button variant='link' className='w-full' disabled={isLoading} asChild>
						<Link href='/auth/login' className='flex items-center justify-center gap-x-2 !text-gray-primary'>
							<ArrowLeft className='h-4 w-4 ml-2' />
							Back to log in
						</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
