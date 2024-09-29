'use client';

import { toast } from 'sonner';
import { Mail } from 'lucide-react';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

import { CardMinForm } from '@auth/_components/card-min-form';

import { Routes } from '@auth/config';
import { useEmail } from '@auth/providers';
import { useVerifyCodeMutation } from '@auth/hooks';
import { verifyCodeSchema, VerifyCodeFormValues, initialVerifyCodeValues } from '@auth/schemas';

import localStorage from '@/services/local-storage-service';

export default function VerifyCodePage() {
	const router = useRouter();
	const { email } = useEmail();
	const { mutateAsync: verifyCodeMutation, isPending } = useVerifyCodeMutation();

	const form = useForm<VerifyCodeFormValues>({
		resolver: zodResolver(verifyCodeSchema),
		defaultValues: initialVerifyCodeValues,
	});

	const onSubmit = async (data: VerifyCodeFormValues) => {
		try {
			const res = await verifyCodeMutation({
				code: data.code,
				email: email,
			});
			localStorage.removeEmail();
			toast.success(res.message || 'Code is valid');
			router.push(Routes.EMAIL_CONFIRMED);
		} catch (error) {
			toast.error('Code is invalid');
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
						{isPending ? <BeatLoader size={10} color='#fff' /> : 'Verify email'}
					</Button>
				</form>
			</Form>
		</CardMinForm>
	);
}
