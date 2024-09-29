'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { HeadingPage } from '@website/_components/ui/heading-page';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Routes } from '@website/config';
import { formContactSchema, FormContactValues, initialFormContactValues } from '@website/schema';
import { countriesName } from '@website/constants';
import { useSendContactMessageMutation } from '@/app/(website)/hooks/contact-us/use-contact-us';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { BeatLoader } from 'react-spinners';
export const ContactForm = () => {
	const { mutateAsync: sendContactMessageMutation, isPending } = useSendContactMessageMutation();

	const form = useForm<FormContactValues>({
		resolver: zodResolver(formContactSchema),
		defaultValues: initialFormContactValues,
	});

	const onSubmit = async (data: FormContactValues) => {
		try {
			await sendContactMessageMutation({
				first_name: data.firstName,
				last_name: data.lastName,
				email: data.email,
				phone: data.phoneNumber.number,
				message: data.message || '',
			});
			toast.success(
				'Thank you for reaching out! Your message has been successfully sent. We will get back to you as soon as possible.'
			);
		} catch (error) {
			toast.error('Oops! Something went wrong while sending your message. Please try again later.');
		}
	};

	return (
		<Section className='pt-16 pb-24'>
			<Container className='gap-y-6'>
				<HeadingPage title='Get in touch' description='Our friendly team would love to hear from you.' />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 w-full'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
							<FormField
								control={form.control}
								name='firstName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder='first name' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lastName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder='last name' {...field} />
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
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type='email' placeholder='email' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className='space-y-2'>
							<Label>Phone Number</Label>
							<div className='flex flex-row items-center justify-start gap-2'>
								<FormField
									control={form.control}
									name='phoneNumber.country'
									render={({ field }) => (
										<FormItem className='w-[140px]'>
											<Select onValueChange={field.onChange} defaultValue={field.value}>
												<FormControl>
													<SelectTrigger disabled={isPending}>
														<SelectValue placeholder='US' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{countriesName.map((country) => (
														<SelectItem key={country.value} value={country.value}>
															{country.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='phoneNumber.number'
									render={({ field }) => (
										<FormItem className='flex-1'>
											<FormControl>
												<Input placeholder='+1 (555) 000-0000' disabled={isPending} {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											rows={6}
											placeholder='write here your message'
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
							name='agreeToPrivacyPolicy'
							render={({ field }) => (
								<FormItem>
									<div className='flex justify-start items-center gap-2'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												disabled={isPending}
											/>
										</FormControl>
										<FormLabel className='mt-1 text'>
											You agree to our friendly
											<Link href={Routes.PRIVACY_POLICY} className='ml-2 underline'>
												privacy policy.
											</Link>
										</FormLabel>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit' disabled={isPending}>
							{isPending ? <BeatLoader size={10} color='#fff' /> : 'Send message'}
						</Button>
					</form>
				</Form>
			</Container>
		</Section>
	);
};
