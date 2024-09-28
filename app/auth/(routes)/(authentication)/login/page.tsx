'use client';

import * as React from 'react';
import Link from 'next/link';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { CardForm } from '@/components/auth/card-form';
import { ShowSocial } from '@/components/auth/show-social';

import { useLoginMutation } from '@/hooks/auth/use-login';

import { Routes } from '@/config';
import { loginSchema, LoginFormValues, initialLoginFormValues } from '@/schemas';
import cookieStorage from '@/services/cookie-storage-service';

export default function LoginPage() {
	const [isRememberMe, setIsRememberMe] = React.useState<boolean>(false);
	const { mutateAsync: loginMutation, isPending } = useLoginMutation();

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: initialLoginFormValues,
	});

	const onSubmit = async (data: LoginFormValues) => {
		try {
			const res = await loginMutation(data);
			isRememberMe && cookieStorage.setMemoryUser(data);
			!isRememberMe && cookieStorage.removeMemoryUser();
			toast.success(res.message || res.message[0] || 'Login is success.');
		} catch (error) {
			toast.success('Login is failed');
		}
	};

	React.useEffect(() => {
		const currentMemoryUser = cookieStorage.getMemoryUser();
		if (!!currentMemoryUser) {
			form.setValue('email', currentMemoryUser.email);
			form.setValue('password', currentMemoryUser.password);
		}
	}, [form]);

	return (
		<CardForm
			title='Welcome back'
			description='Welcome back! Please enter your details.'
			backButtonMessage='Don’t have an account?'
			backLabelButton='Sign up'
			backHrefButton={Routes.REGISTER}
		>
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
										<Input {...field} type='email' disabled={isPending} placeholder='Enter your email' />
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
								<Checkbox checked={isRememberMe} onCheckedChange={() => setIsRememberMe((prev) => !prev)} />
								<p className='text-black-200 font-medium leading-none text-sm mt-1'>Remember for 30 days.</p>
							</div>
							<Button size='sm' variant='link' className='px-0'>
								<Link href={Routes.SEND_EMAIL_TO_RESET_PASSWORD}>Forget Password</Link>
							</Button>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<Button type='submit' disabled={isPending}>
							Sign in
						</Button>
						<ShowSocial isLoading={isPending} />
					</div>
				</form>
			</Form>
		</CardForm>
	);
}
