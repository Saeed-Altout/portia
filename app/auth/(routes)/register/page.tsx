'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const registerSchema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	async function onSubmit(data: RegisterFormValues) {
		setIsLoading(true);
		try {
			console.log(data);
			router.push('/auth/login');
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card className='w-full max-w-md border-none shadow-none'>
			<CardHeader className='space-y-3 hidden lg:flex'>
				<CardTitle className='text-xl font-semibold'>Sign up</CardTitle>
				<CardDescription className='text-base font-normal'>Start your journey today.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-5'>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Username*</FormLabel>
										<FormControl>
											<Input {...field} disabled={isLoading} placeholder='Enter your name' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Email*</FormLabel>
										<FormControl>
											<Input
												{...field}
												type='email'
												disabled={isLoading}
												placeholder='Enter your email'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Password*</FormLabel>
										<FormControl>
											<Input
												{...field}
												type='password'
												disabled={isLoading}
												placeholder='Create a password'
											/>
										</FormControl>
										<FormDescription>Must be at least 8 characters.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col gap-4'>
							<Button type='submit' className='w-full' disabled={isLoading}>
								Create account
							</Button>
							<Button
								variant='outline'
								className='w-full flex items-center justify-center gap-x-2'
								disabled={isLoading}
							>
								<FcGoogle className='h-6 w-6' />
								Sign up with Google
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
			<CardFooter className='flex justify-center'>
				<p className='text-sm'>
					Already have an account?{' '}
					<Link href='/auth/login' className='hover:underline text-primary font-medium'>
						Log in
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
