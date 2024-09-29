'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { CardForm } from '@auth/_components/card-form';
import { ShowSocial } from '@auth/_components/show-social';

import { Routes } from '@auth/config';
import { useRegisterMutation } from '@auth/hooks';
import { initialRegisterFormValues, RegisterFormValues, registerSchema } from '@auth/schemas';

import localStorage from '@/services/local-storage-service';

export default function RegisterPage() {
	const router = useRouter();
	const { mutateAsync: register, isPending } = useRegisterMutation();

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: initialRegisterFormValues,
	});

	const onSubmit = async (data: RegisterFormValues) => {
		try {
			const res = await register(data);
			localStorage.setEmail(data.email);
			toast.success(res.message || 'Register is successful.');
			router.push(Routes.VERIFY_EMAIL);
		} catch (error) {
			toast.success('Register is failed');
		}
	};

	return (
		<CardForm
			title='Sign up'
			description='Start your journey today.'
			backButtonMessage='Already have an account?'
			backLabelButton='Log in'
			backHrefButton={Routes.LOGIN}
			showMessage
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='first_name'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium'>First Name*</FormLabel>
									<FormControl>
										<Input {...field} disabled={isPending} placeholder='Enter your first name' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='last_name'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium'>Last Name*</FormLabel>
									<FormControl>
										<Input {...field} disabled={isPending} placeholder='Enter your last name' />
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
									<FormLabel className='text-sm font-medium'>Password*</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='password'
											disabled={isPending}
											placeholder='Create a password'
										/>
									</FormControl>
									<FormDescription>Must be at least 8 characters.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='flex flex-col gap-y-5'>
						<Button type='submit' disabled={isPending}>
							{isPending ? <BeatLoader size={10} color='#fff' /> : 'Create account'}
						</Button>
						<ShowSocial isLoading={isPending} />
					</div>
				</form>
			</Form>
		</CardForm>
	);
}
