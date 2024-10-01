'use client';

import Link from 'next/link';

import { Routes } from '@/config';

import { useGetFaqsQuery } from '@/app/(website)/hooks/faqs/get-faqs-query';
import { FaqSkeleton } from '@website/_components/skeletons/faq-skeleton';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQs = () => {
	const { data: faqs, isLoading, isError, isSuccess } = useGetFaqsQuery();

	return (
		<section id='faqs' className='w-full py-20'>
			<div className='container flex items-start justify-start lg:flex-row gap-x-16 gap-y-12'>
				<div className='max-w-[448px]'>
					<h1 className='text-3xl lg:text-4xl font-semibold'>FAQs</h1>
					<p className='text-lg'>
						Here are the most common questions and how we answer them, Can&apos;t find the answer you&apos;re
						looking for? Please
						<Link href={Routes.CONTACT_US} className='ml-2 underline'>
							chat to Sales team.
						</Link>
					</p>
				</div>
				<div className='flex-1'>
					{(isLoading || isError) && (
						<div className='w-full flex flex-col gap-2'>
							{[...Array(5)].map((_, index) => (
								<FaqSkeleton key={index} />
							))}
						</div>
					)}
					{isSuccess && (
						<Accordion type='single' collapsible>
							{faqs?.data.map(({ question, answer }, index) => (
								<AccordionItem key={index} value={`faq-${index + 1}`}>
									<AccordionTrigger>{question}</AccordionTrigger>
									<AccordionContent>
										<p>{answer}</p>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					)}
				</div>
			</div>
		</section>
	);
};
