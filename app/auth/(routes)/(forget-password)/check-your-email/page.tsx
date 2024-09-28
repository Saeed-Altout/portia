'use client';

import * as React from 'react';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { CardMinForm } from '@/components/auth/card-min-form';

import { Routes } from '@/config';
import localStorage from '@/services/local-storage-service';

export default function CheckYourEmailPage() {
	const router = useRouter();
	const [email, setEmail] = React.useState<string>('');
	const [isMounted, setIsMounted] = React.useState<boolean>(false);

	React.useEffect(() => {
		const currentEmail = localStorage.getEmail();
		if (currentEmail) {
			setEmail(email);
			setIsMounted(true);
		} else {
			router.push(Routes.REGISTER);
		}

		return () => setIsMounted(false);
	}, [router, email]);

	if (!isMounted) {
		return null;
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
