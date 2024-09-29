'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardMinForm } from '@auth/_components/card-min-form';

import { Routes } from '@auth/config';

export default function VerifyEmailPage() {
	const params = useSearchParams();
	const email = params.get('email');

	return (
		<CardMinForm
			title='Check your email'
			description='We sent a password reset link to'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			email={email || ''}
			icon={Mail}
		>
			<Button className='w-full'>
				<Link href={`${Routes.VERIFY_CODE}?email=${email}`}>Enter code manually</Link>
			</Button>
		</CardMinForm>
	);
}
