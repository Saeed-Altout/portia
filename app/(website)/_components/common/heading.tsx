'use client';

import * as React from 'react';

import { Paragraph } from '@website/_components/ui/paragraph';
import { cn } from '@/lib/utils';

export const Heading = ({
	title,
	description,
	heading,
	children,
	className,
}: {
	title: string;
	description?: string;
	heading?: string;
	children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) => {
	return (
		<div className={cn('flex items-start justify-start flex-col gap-5 md:flex-row md:items-center md:justify-between', className)}>
			<div className='space-y-4 md:space-y-5 flex-1 relative'>
				<span className='block absolute -top-6 left-0 text-primary font-semibold'>{heading}</span>
				<h1 className='text-3xl md:text-4xl font-semibold'>{title}</h1>
				<Paragraph>{description}</Paragraph>
			</div>
			<div className='w-full md:w-fit'>{children}</div>
		</div>
	);
};
