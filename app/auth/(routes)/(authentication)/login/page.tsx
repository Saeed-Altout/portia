'use client';

import Link from 'next/link';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useLogin } from '@auth/hooks';
import { loginSchema } from '@auth/schemas';
import { Header, Footer, SubmitButton, Provider } from '@auth/_components';

export default function LoginPage() {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { onSubmit, isPending, isRememberMe, setIsRememberMe } = useLogin(form);

	return (
		<Card className='w-full max-w-md border-none shadow-none'>
			<CardHeader>
				<Header title='Welcome back' description='Welcome back! Please enter your details.' />
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-4'>
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
												disabled={isPending}
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
											<Input {...field} type='password' disabled={isPending} placeholder='********' />
										</FormControl>
										<FormDescription>Must be at least 8 characters.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex items-center justify-between'>
								<div className='flex flex-row items-center gap-2'>
									<Checkbox
										checked={isRememberMe}
										onCheckedChange={() => setIsRememberMe((prev) => !prev)}
									/>
									<p className='text-black-200 font-medium leading-none text-sm mt-1'>
										Remember for 30 days.
									</p>
								</div>
								<Button size='sm' variant='link' className='px-0'>
									<Link href='/auth/send-reset-email'>Forget Password</Link>
								</Button>
							</div>
						</div>
						<div className='flex flex-col gap-y-5'>
							<SubmitButton isLoading={isPending} label='Sign in' />
							<Provider isLoading={isPending} />
						</div>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<Footer label='Sign up' href='/auth/register' message='Don’t have an account?' />
			</CardFooter>
		</Card>
	);
}
