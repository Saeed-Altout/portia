'use client';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { Routes } from '@auth/config';
import { CardMinForm } from '@auth/_components/card-min-form';

export default function VerifyRestEmailPage() {
	const router = useRouter();

	return (
		<CardMinForm
			title='Check your email'
			description='We sent a password reset link to'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			email={''}
			icon={Mail}
			redirect
		>
			<Button className='w-full'>Open email app</Button>
		</CardMinForm>
	);
}
