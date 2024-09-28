'use client';

import * as React from 'react';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { CardMinForm } from '@/components/auth/card-min-form';

import { Routes } from '@/config';
import { useEmail } from '@/providers/auth';

export default function CheckYourEmailPage() {
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
			redirect
		>
			<Button className='w-full'>Open email app</Button>
		</CardMinForm>
	);
}
