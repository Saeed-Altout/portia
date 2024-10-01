'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useRegister } from '@auth/hooks';
import { registerSchema } from '@auth/schemas';
import { Header, Footer, SubmitButton, Provider } from '@auth/_components';

export default function RegisterPage() {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
		},
	});
	const { onSubmit, isPending } = useRegister();

	return (
		<Card className='w-full max-w-md border-none shadow-none'>
			<CardHeader>
				<Header title='Sign up' description='Start your journey today.' />
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='space-y-4'>
							<div className='flex flex-row gap-x-4'>
								<FormField
									control={form.control}
									name='first_name'
									render={({ field }) => (
										<FormItem className='w-full'>
											<FormLabel className='text-sm font-medium'>First Name*</FormLabel>
											<FormControl>
												<Input
													type='text'
													placeholder='Enter your first name'
													disabled={isPending}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='last_name'
									render={({ field }) => (
										<FormItem className='w-full'>
											<FormLabel className='text-sm font-medium'>Last Name*</FormLabel>
											<FormControl>
												<Input
													type='text'
													placeholder='Enter your last name'
													{...field}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-sm font-medium'>Email*</FormLabel>
										<FormControl>
											<Input
												type='email'
												placeholder='Enter your email'
												disabled={isPending}
												{...field}
											/>
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
												type='password'
												placeholder='Create a password'
												disabled={isPending}
												{...field}
											/>
										</FormControl>
										<FormDescription>Must be at least 8 characters.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col gap-y-5'>
							<SubmitButton isLoading={isPending} label='Create account' />
							<Provider isLoading={isPending} />
						</div>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<Footer label='Sign in' href='/auth/login' message='Already have an account?' />
			</CardFooter>
		</Card>
	);
}
