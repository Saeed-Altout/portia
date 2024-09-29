'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Routes } from '@auth/config';
import { CardMinForm } from '@auth/_components/card-min-form';

export default function PasswordResetPage() {
	return (
		<CardMinForm
			title='Password reset'
			description='Your password has been successfully reset. Click below to log in magically.'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			icon={CheckCircle}
			variant='success'
		>
			<Button className='w-full' asChild>
				<Link href={Routes.DEFAULT_PAGE}>Continue</Link>
			</Button>
		</CardMinForm>
	);
}
