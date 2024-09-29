'use client';

import { toast } from 'sonner';
import { Key } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { CardMinForm } from '@auth/_components/card-min-form';

import { Routes } from '@auth/config';
import { useSetNewPasswordMutation } from '@auth/hooks';
import { newPasswordSchema, NewPasswordFormValues, initialNewPasswordValues } from '@auth/schemas';

import localStorage from '@/services/local-storage-service';

export default function NewPasswordPage() {
	const router = useRouter();
	const { mutateAsync: setNewPasswordMutation, isPending } = useSetNewPasswordMutation();

	const form = useForm<NewPasswordFormValues>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: initialNewPasswordValues,
	});

	async function onSubmit(data: NewPasswordFormValues) {
		try {
			const res = await setNewPasswordMutation(data);
			localStorage.removeEmail();
			toast.success(res.message);
			router.push(Routes.RESET_PASSWORD);
		} catch (error) {
			toast.error('Something went wrong!');
		}
	}

	return (
		<CardMinForm
			title='Set new password'
			description='Your new password must be different to previously used passwords.'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			icon={Key}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium'>Password</FormLabel>
									<FormControl>
										<Input {...field} type='password' disabled={isPending} placeholder='*********' />
									</FormControl>
									<FormDescription>Must be at least 8 characters.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password_confirmation'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium'>Confirm Password</FormLabel>
									<FormControl>
										<Input {...field} type='password' disabled={isPending} placeholder='*********' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type='submit' className='w-full' disabled={isPending}>
						{isPending ? <BeatLoader size={10} color='#fff' /> : 'Reset password'}
					</Button>
				</form>
			</Form>
		</CardMinForm>
	);
}
