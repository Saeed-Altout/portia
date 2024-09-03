import Link from 'next/link';

import { freqAQsData } from '@website/constants';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const Content = () => {
	return (
		<section className='max-container section space-y-16'>
			<Accordion type='single' collapsible className='flex flex-col gap-5 max-w-[768px] mx-auto'>
				{/* TODO: Update data from API */}
				{freqAQsData.map(({ question, answer }, index) => (
					<AccordionItem key={index} value={`item-${index + 1}`} className='py-4'>
						<AccordionTrigger>
							<span className='font-medium text-lg text-left'>{question}</span>
						</AccordionTrigger>
						<AccordionContent className='text-gray-primary text-sm md:text-base'>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<div className='flex items-start justify-start flex-col gap-5 md:flex-row md:items-center md:justify-between p-8 bg-[#F5F5FA] rounded-[16px]'>
				<div className='space-y-2 flex-1 relative max-w-3xl'>
					<h1 className='text-xl font-medium'>Still have questions?</h1>
					<p>Can’t find the answer you’re looking for? Please chat to our team.</p>
				</div>
				<Button className='w-full md:w-fit' asChild>
					<Link href='/contact-us'>Contact us</Link>
				</Button>
			</div>
		</section>
	);
};
