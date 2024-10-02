'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BeatLoader } from 'react-spinners';
import { PhoneInput } from 'react-international-phone';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { HeadingPage } from '@website/_components/ui/heading-page';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { formContactSchema } from '@website/schema';
import { useSendContactMessage } from '@website/hooks';

export const ContactForm = () => {
	const { onSubmit, isPending } = useSendContactMessage();

	const form = useForm<z.infer<typeof formContactSchema>>({
		resolver: zodResolver(formContactSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	return (
		<Section className='pt-16 pb-24'>
			<Container className='gap-y-6'>
				<HeadingPage title='Get in touch' description='Our friendly team would love to hear from you.' />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 w-full'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
							<FormField
								control={form.control}
								name='first_name'
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
								name='last_name'
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
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone number</FormLabel>
									<FormControl>
										<PhoneInput
											disabled={isPending}
											className='react-international-phone-input-container'
											defaultCountry='sy'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
						<Button type='submit' disabled={isPending}>
							{isPending ? <BeatLoader size={10} color='#fff' /> : 'Send message'}
						</Button>
					</form>
				</Form>
			</Container>
		</Section>
	);
};
