'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail } from 'lucide-react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

const optSchema = z.object({
	code: z.string().min(6, 'Code is required!'),
});

type OtpFormValues = z.infer<typeof optSchema>;

export default function OtpPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const form = useForm<OtpFormValues>({
		resolver: zodResolver(optSchema),
		defaultValues: {
			code: '',
		},
	});

	async function onSubmit(data: OtpFormValues) {
		setIsLoading(true);
		try {
			console.log(data);
			router.push('/');
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card className='w-full max-w-[360px] border-none shadow-none'>
			<CardHeader className='space-y-3 flex text-center px-0'>
				<div className='bg-[#B5B6F7] border-[8px] border-[#D4D4FF] w-[56px] h-[56px] flex items-center justify-center rounded-full mx-auto mb-4'>
					<Mail className='text-primary h-5 w-5' />
				</div>
				<CardTitle className='text-2xl md:text-3xl font-semibold'>Check your email</CardTitle>
				<CardDescription className='text-base font-normal w-full'>
					We sent a password reset link to <br /> <span className='font-medium'>Jafar_shamma@gmail.com</span>
				</CardDescription>
			</CardHeader>
			<CardContent className='px-0'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-5 flex justify-center items-center'>
							<FormField
								control={form.control}
								name='code'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<InputOTP maxLength={6} {...field}>
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
						<div className='flex flex-col gap-8'>
							<Button type='submit' className='w-full' disabled={isLoading}>
								Verify email
							</Button>
							<p className='text-sm text-center'>
								Didn’t receive the email?{' '}
								<Link href='/auth/reset' className='hover:underline text-primary font-medium'>
									Click to resend
								</Link>
							</p>
							<Button variant='link' className='w-full' disabled={isLoading} asChild>
								<Link
									href='/auth/login'
									className='flex items-center justify-center gap-x-2 !text-gray-primary'
								>
									<ArrowLeft className='h-4 w-4 ml-2' />
									Back to log in
								</Link>
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
