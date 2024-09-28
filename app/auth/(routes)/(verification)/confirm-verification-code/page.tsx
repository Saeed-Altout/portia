'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { Button } from '@/components/ui/button';
import { CardMinForm } from '@/components/auth/card-min-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

import localStorage from '@/services/local-storage-service';
import { useConfirmVerificationCodeMutation } from '@/hooks/auth/use-confirm-verification-code';

import {
	confirmVerificationCodeSchema,
	ConfirmVerificationCodeFormValues,
	initialConfirmVerificationCodeValues,
} from '@/schemas';
import { Routes } from '@/config';
import { useEmail } from '@/providers/auth';

export default function ConfirmVerificationCodePage() {
	const router = useRouter();
	const { email } = useEmail();
	const { mutateAsync: confirmVerificationCode, isPending } = useConfirmVerificationCodeMutation();

	const form = useForm<ConfirmVerificationCodeFormValues>({
		resolver: zodResolver(confirmVerificationCodeSchema),
		defaultValues: initialConfirmVerificationCodeValues,
	});

	const onSubmit = async (data: ConfirmVerificationCodeFormValues) => {
		try {
			const res = await confirmVerificationCode({
				...data,
				email: email,
			});
			localStorage.removeEmail();
			toast.success(res.message || res.message[0] || 'Verification code is valid');
			router.push(Routes.EMAIL_VERIFIED);
		} catch (error) {
			toast.error('Verification code is invalid');
		}
	};

	if (!email) {
		router.push(Routes.REGISTER);
	}

	return (
		<CardMinForm
			title='Check your email'
			description='We sent a password reset link to'
			backHrefButton={Routes.LOGIN}
			backLabelButton='Back to log in'
			email={email}
			icon={Mail}
			redirect
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='flex justify-center items-center gap-y-4'>
						<FormField
							control={form.control}
							name='code'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<InputOTP
											disabled={isPending}
											maxLength={6}
											pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
											{...field}
										>
											<InputOTPGroup>
												<InputOTPSlot index={0} />
												<InputOTPSlot index={1} />
												<InputOTPSlot index={2} />
												<InputOTPSeparator />
												<InputOTPSlot index={3} />
												<InputOTPSlot index={4} />
												<InputOTPSlot index={5} />
											</InputOTPGroup>
										</InputOTP>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type='submit' className='w-full' disabled={isPending}>
						Verify email
					</Button>
				</form>
			</Form>
		</CardMinForm>
	);
}
