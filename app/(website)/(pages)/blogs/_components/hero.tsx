'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
	email: z.string().email(),
});

export const Hero = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<div className='max-container h-[488px]'>
			<div className='space-y-8 flex-1 text-left flex items-start justify-center flex-col h-full max-w-3xl'>
				<div className='space-y-6'>
					<p className='text-primary font-semibold'>Our blog</p>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Portia.io blog</h1>
					<p className='text-xl leading-8'>
						Subscribe to learn about new product features, the latest in technology, solutions, and updates.
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='flex items-start justify-start gap-4'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder='Enter your email' {...field} />
									</FormControl>
									<FormDescription>
										We care about your data in our
										<Link href='/privacy-policy' className='underline'>
											privacy policy
										</Link>
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Subscribe</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
