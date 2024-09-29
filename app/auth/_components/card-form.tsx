'use client';

import * as React from 'react';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { BackButton } from '@/app/auth/_components/back-button';
import { HeaderCard } from './header-card';

interface CardFormProps {
	title: string;
	description?: string;
	backButtonMessage?: string;
	backLabelButton?: string;
	backHrefButton?: string;
	showMessage?: boolean;
	children: React.ReactNode;
}

export const CardForm = ({
	title,
	description,
	backButtonMessage,
	backLabelButton,
	backHrefButton,
	showMessage,
	children,
}: CardFormProps) => {
	return (
		<Card className='w-full max-w-md border-none shadow-none'>
			<CardHeader>
				<HeaderCard title={title} description={description} showMessage={showMessage} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			{backHrefButton && (
				<CardFooter className='flex justify-center'>
					<BackButton message={backButtonMessage} label={backLabelButton} href={backHrefButton} />
				</CardFooter>
			)}
		</Card>
	);
};
