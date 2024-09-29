'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { CardForm } from '@auth/_components/card-form';
import { ShowSocial } from '@auth/_components/show-social';

import { Routes } from '@auth/config';
import { useLoginMutation, useRememberMe } from '@auth/hooks';
import { loginSchema, LoginFormValues, initialLoginFormValues } from '@auth/schemas';

import cookieStorage from '@/services/cookie-storage-service';

export default function LoginPage() {
	const router = useRouter();
	const { mutateAsync: loginMutation, isPending } = useLoginMutation();

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: initialLoginFormValues,
	});

	const { isRememberMe, setIsRememberMe } = useRememberMe(form);

	const onSubmit = async (data: LoginFormValues) => {
		try {
			const res = await loginMutation(data);
			if (isRememberMe) {
				cookieStorage.setMemoryUser(data, { days: 30 });
			} else {
				cookieStorage.removeMemoryUser();
			}
			toast.success('Login successful');
			router.refresh();
		} catch (error) {
			toast.error('Login failed');
		}
	};

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
								<Link href={Routes.SEND_RESET_EMAIL}>Forget Password</Link>
							</Button>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<Button type='submit' disabled={isPending}>
							{isPending ? <BeatLoader size={10} color='#fff' /> : 'Sign in'}
						</Button>
						<ShowSocial isLoading={isPending} />
					</div>
				</form>
			</Form>
		</CardForm>
	);
}
