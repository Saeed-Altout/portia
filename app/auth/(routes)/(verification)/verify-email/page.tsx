'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardMinForm } from '@auth/_components/card-min-form';

import { Routes } from '@auth/config';
import { useEmail } from '@auth/providers';

export default function VerifyEmailPage() {
	const router = useRouter();
	const { email } = useEmail();

	if (!email) {
		router.push(Routes.REGISTER);
	}

	return (
		<CardMinForm
			title='Check your email'
			description='We sent a password reset link to'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			email={email}
			icon={Mail}
		>
			<Button className='w-full'>
				<Link href={Routes.VERIFY_CODE}>Enter code manually</Link>
			</Button>
		</CardMinForm>
	);
}
