import Image from 'next/image';
import { Check } from 'lucide-react';

import { plansData } from '@website/constants';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Heading } from '@website/_components/common/heading';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Plans = () => {
	return (
		<Section space='wide'>
			<Container size='wide' className='space-y-24'>
				<Heading heading='Pricing' title='Simple, transparent pricing' description='We believe Portia should be accessible to all people, no matter their usage.' />
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-x-8'>
					{plansData.map(({ price, type, features }, index) => (
						<Card key={index} className='shadow-xl rounded-[16px] relative'>
							{index + 1 === 1 && (
								<div className='absolute right-[20px] md:right-[-70px] top-[-30px] flex items-start justify-center'>
									<Image src='/icons/arrow.svg' alt='Arrow' width={62} height={30} className='relative top-1' />
									<p className='text-primary font-medium text-sm'>Most Popular!</p>
								</div>
							)}
							<CardHeader className='text-center p-0 px-8 pt-10 space-y-4'>
								<CardTitle className='font-semibold text-4xl lg:text-5xl'>${price}</CardTitle>
								<div className='text-center space-y-2'>
									<Paragraph className='font-semibold text-black-primary' size='xl'>
										{type}
									</Paragraph>
									<Paragraph>who is this for?</Paragraph>
								</div>
							</CardHeader>
							<CardContent className='space-y-8 p-8'>
								<div className='flex flex-col gap-y-4'>
									{features.map((feature, index) => (
										<div key={index} className='flex items-center justify-start gap-x-3'>
											<span className='bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center'>
												<Check className='text-[#26A6A4] h-4 w-4' />{' '}
											</span>
											<Paragraph className='capitalize'>{feature}</Paragraph>
										</div>
									))}
								</div>
							</CardContent>
							<CardFooter className='p-8 pt-2'>
								<Button className='w-full'>Get Started</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
