'use client';

import { toast } from 'sonner';
import { Key } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { CardMinForm } from '@auth/_components/card-min-form';

import localStorage from '@/services/local-storage-service';

import { Routes } from '@auth/config';
import { useSendResetEmailMutation } from '@auth/hooks';
import { sendResetEmailSchema, SendResetEmailFormValues, initialSendResetEmailValues } from '@auth/schemas';

export default function SendResetEmailPage() {
	const router = useRouter();
	const { mutateAsync: sendResetEmailMutation, isPending } = useSendResetEmailMutation();

	const form = useForm<SendResetEmailFormValues>({
		resolver: zodResolver(sendResetEmailSchema),
		defaultValues: initialSendResetEmailValues,
	});

	const onSubmit = async (data: SendResetEmailFormValues) => {
		try {
			const res = await sendResetEmailMutation(data);
			localStorage.setEmail(data.email);
			toast.success(res.message);
			router.push(Routes.VERIFY_RESET_EMAIL);
		} catch (error) {
			toast.success('Email is invalid.');
		}
	};

	return (
		<CardMinForm
			title='Forgot password?'
			description='No worries, we’ll send you reset instructions.'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			icon={Key}
		>
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
					<Button type='submit' className='w-full' disabled={isPending}>
						{isPending ? <BeatLoader size={10} color='#fff' /> : 'Reset password'}
					</Button>
				</form>
			</Form>
		</CardMinForm>
	);
}
