'use client';

import { toast } from 'sonner';
import { Key } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardMinForm } from '@/components/auth/card-min-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import localStorage from '@/services/local-storage-service';
import { useSetNewPasswordMutation } from '@/hooks/auth/use-set-new-password';

import { setNewPasswordSchema, SetNewPasswordFormValues, initialSetNewPasswordValues } from '@/schemas';
import { Routes } from '@/config';

export default function SetNewPasswordPage() {
	const router = useRouter();
	const { mutateAsync: setNewPasswordMutation, isPending } = useSetNewPasswordMutation();

	const form = useForm<SetNewPasswordFormValues>({
		resolver: zodResolver(setNewPasswordSchema),
		defaultValues: initialSetNewPasswordValues,
	});

	async function onSubmit(data: SetNewPasswordFormValues) {
		try {
			const res = await setNewPasswordMutation(data);
			toast.success(res.message);
			localStorage.removeEmail();
			router.push(Routes.PASSWORD_RESET);
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
						Reset password
					</Button>
				</form>
			</Form>
		</CardMinForm>
	);
}
