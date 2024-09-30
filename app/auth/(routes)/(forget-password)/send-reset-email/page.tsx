'use client';

import Link from 'next/link';

import { ArrowLeft, Key } from 'lucide-react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Circle, Icon } from '@/components/shared/circle-icon';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/ui/form';

import { useSendResetEmail } from '@auth/hooks';
import { sendResetEmailSchema } from '@auth/schemas';
import { SubmitButton } from '@auth/_components';

export default function SendResetEmailPage() {
	const form = useForm<z.infer<typeof sendResetEmailSchema>>({
		resolver: zodResolver(sendResetEmailSchema),
		defaultValues: {
			email: '',
		},
	});

	const { onSubmit, isPending } = useSendResetEmail();

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none pt-24'>
			<CardHeader className='flex flex-col items-center justify-center gap-y-3'>
				<Circle size='lg'>
					<Icon size='lg' icon={Key} />
				</Circle>
				<CardTitle className='text-2xl md:text-3xl font-semibold text-center'>Forgot password?</CardTitle>
				<CardDescription className='text-center'>No worries, we’ll send you reset instructions.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium'>Email</FormLabel>
									<FormControl>
										<Input {...field} type='email' disabled={isPending} placeholder='Enter your email' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<SubmitButton isLoading={isPending} label='Reset password' />
					</form>
				</Form>
			</CardContent>
			<CardFooter>
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
