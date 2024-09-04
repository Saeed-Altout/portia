import Link from 'next/link';

import { faqsData } from '@website/constants';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Heading } from '@website/_components/common/heading';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const FAQs = () => {
	return (
		<Section space='wide'>
			<Container size='wide' view='vertical' className='gap-x-8 gap-y-12 lg:flex-row'>
				<div className='max-w-[448px]'>
					<Heading title='FAQs' />
					<Paragraph size='lg'>
						Here are the most common questions and how we answer them, Can&apos;t find the answer you&apos;re looking for? Please{' '}
						<Button variant='link' asChild className='p-0 underline' size='sm'>
							<Link href='/' className='!text-gray-primary'>
								chat to Sales team.
							</Link>
						</Button>
					</Paragraph>
				</div>

				<div className='flex-1 w-full'>
					<Accordion type='single' collapsible className='flex flex-col gap-5'>
						{faqsData.map(({ question, answer }, index) => (
							<AccordionItem key={index} value={`item-${index + 1}`}>
								<AccordionTrigger>
									<span className='font-medium text-lg text-left'>{question}</span>
								</AccordionTrigger>
								<AccordionContent className='text-gray-primary text-base'>{answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</Container>
		</Section>
	);
};
