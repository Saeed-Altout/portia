'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Key } from 'lucide-react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const newPasswordSchema = z.object({
	password: z.string().min(8, 'Password must be at least 8 characters'),
	confirmPassword: z.string().min(8, 'Confirm Password must be at least 8 characters'),
});

type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;

export default function NewPasswordPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const form = useForm<NewPasswordFormValues>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	});

	async function onSubmit(data: NewPasswordFormValues) {
		setIsLoading(true);
		try {
			console.log(data);
			router.push('/reset/email');
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none'>
			<CardHeader className='space-y-3 flex text-center px-0'>
				<div className='bg-[#B5B6F7] border-[8px] border-[#D4D4FF] w-[56px] h-[56px] flex items-center justify-center rounded-full mx-auto mb-4'>
					<Key className='text-primary h-5 w-5' />
				</div>
				<CardTitle className='text-2xl md:text-3xl font-semibold'>Set new password</CardTitle>
				<CardDescription className='text-base font-normal w-full'>
					Your new password must be different to previously used passwords.
				</CardDescription>
			</CardHeader>
			<CardContent className='px-0'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-5'>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Password</FormLabel>
										<FormControl>
											<Input {...field} type='password' disabled={isLoading} placeholder='*********' />
										</FormControl>
										<FormDescription>Must be at least 8 characters.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='confirmPassword'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Confirm Password</FormLabel>
										<FormControl>
											<Input {...field} type='password' disabled={isLoading} placeholder='*********' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col gap-4'>
							<Button type='submit' className='w-full' disabled={isLoading}>
								Reset Password
							</Button>
							<Button variant='link' className='w-full' disabled={isLoading} asChild>
								<Link
									href='/auth/login'
									className='flex items-center justify-center gap-x-2 !text-gray-primary'
								>
									<ArrowLeft className='h-4 w-4 ml-2' />
									Back to log in
								</Link>
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
