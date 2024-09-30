'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ArrowLeft, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Circle, Icon } from '@/components/shared/circle-icon';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function VerifyRestEmailPage() {
	const params = useSearchParams();
	const email = params.get('email');

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none pt-24'>
			<CardHeader className='flex flex-col items-center justify-center gap-y-3'>
				<Circle size='lg'>
					<Icon size='lg' icon={Mail} />
				</Circle>
				<CardTitle className='text-2xl md:text-3xl font-semibold text-center'>Check your email</CardTitle>
				<CardDescription className='text-center'>
					We sent a password reset link to
					{email && <span className='font-medium block'>{email}</span>}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button className='w-full'>
					<Link href={`/auth/verify-code?email=${email}`}>Open email app</Link>
				</Button>
			</CardContent>
			<CardFooter className='flex flex-col gap-y-5'>
				<p className='text !text-sm text-center'>
					Didn’t receive the email?
					<Link href='/auth/reset' className='hover:underline text-primary font-medium text-nowrap ml-2'>
						Click to resend
					</Link>
				</p>
				<Button variant='link' className='mx-auto' asChild>
					<Link href='/auth/login' className='flex items-center justify-center !text-gray-500'>
						<ArrowLeft className='h-4 w-4 mr-2' />
						Back to log in
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
