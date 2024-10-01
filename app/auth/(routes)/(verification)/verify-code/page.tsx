'use client';

import { useSearchParams } from 'next/navigation';

import { Mail } from 'lucide-react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Circle, Icon } from '@/components/shared/circle-icon';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

import { useVerifyCode } from '@auth/hooks';
import { verifyCodeSchema } from '@auth/schemas';
import { BackButton, ResendButton, SubmitButton } from '@auth/_components';

export default function VerifyCodePage() {
	const params = useSearchParams();
	const email = params.get('email');

	const { onSubmit, isPending } = useVerifyCode(email || '');

	const form = useForm<z.infer<typeof verifyCodeSchema>>({
		resolver: zodResolver(verifyCodeSchema),
		defaultValues: {
			code: '',
		},
	});

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none pt-24'>
			<CardHeader className='flex flex-col items-center justify-center gap-y-3'>
				<Circle size='lg'>
					<Icon size='lg' icon={Mail} />
				</Circle>
				<CardTitle className='text-2xl md:text-3xl font-semibold text-center'>Check your email</CardTitle>
				<CardDescription className='text-center'>
					We sent a password reset link to
					{email != 'null' && email && <span className='font-medium block text-wrap'>{email}</span>}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='flex justify-center items-center'>
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

						<SubmitButton label='Verify email' isLoading={isPending} />
					</form>
				</Form>
			</CardContent>
			<CardFooter className='flex flex-col gap-y-5'>
				<ResendButton />
				<BackButton />
			</CardFooter>
		</Card>
	);
}
