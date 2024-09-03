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
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
	isRememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			isRememberMe: false,
		},
	});

	async function onSubmit(data: LoginFormValues) {
		setIsLoading(true);
		try {
			console.log(data);
			router.push('/');
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card className='w-full max-w-md border-none shadow-none'>
			<CardHeader className='space-y-3 hidden lg:flex'>
				<CardTitle className='text-xl font-semibold'>Welcome back</CardTitle>
				<CardDescription className='text-base font-normal'>Welcome back! Please enter your details.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-5'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Email</FormLabel>
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
										<FormLabel className='text-sm font-medium'>Password</FormLabel>
										<FormControl>
											<Input {...field} type='password' disabled={isLoading} placeholder='********' />
										</FormControl>
										<FormDescription>Must be at least 8 characters.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex items-center justify-between'>
								<FormField
									control={form.control}
									name='isRememberMe'
									render={({ field }) => (
										<FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border border-none outline-none shadow-none'>
											<FormControl>
												<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											</FormControl>
											<div className='space-y-1 leading-none'>
												<FormDescription className='text-black-primary font-medium'>
													Remember for 30 days.
												</FormDescription>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>
								<Button size='sm' variant='link' className='px-0'>
									<Link href='/auth/reset'>Forget Password</Link>
								</Button>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<Button type='submit' className='w-full' disabled={isLoading}>
								Sign in
							</Button>
							<Button
								variant='outline'
								className='w-full flex items-center justify-center gap-x-2'
								disabled={isLoading}
							>
								<FcGoogle className='h-6 w-6' />
								Sign in with Google
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
			<CardFooter className='flex justify-center'>
				<p className='text-sm'>
					Don’t have an account?{' '}
					<Link href='/auth/register' className='hover:underline text-primary font-medium'>
						Sign up
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
