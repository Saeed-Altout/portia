import Link from 'next/link';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

import { plansData2 } from '@website/constants';

export const Plans = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{plansData2.map(({ price, status, type, message, features, description }, index) => (
						<Card key={index} className='drop-shadow-xl rounded-[16px]'>
							<CardHeader className='space-y-4'>
								<div className='flex items-center justify-between'>
									<Paragraph>{type}</Paragraph>
									{status && <span className='bg-[#D4D4FF] px-[14px] py-[3px] rounded-full text-sm font-medium'>{status}</span>}
								</div>
								<CardTitle className='font-semibold text-4xl md:text-5xl lg:text-6xl'>
									{price}
									<span className='text-base font-medium text-gray-primary ml-2 tracking-wide'>per month</span>
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-8'>
								<Paragraph>{description}</Paragraph>
								<div className='flex flex-col gap-3'>
									<Button className='w-full'>Get Started</Button>
									<Button className='w-full' variant='outline'>
										Contact sales
									</Button>
								</div>
							</CardContent>
							<Separator />
							<CardFooter className='flex-col items-start gap-8 pt-6'>
								{message && (
									<div className='flex flex-col gap-y-1'>
										<h3 className='font-semibold'>FEATURES</h3>
										<Paragraph>{message}</Paragraph>
									</div>
								)}
								<div className='flex flex-col gap-y-4'>
									{features.map((feature, index) => (
										<div key={index} className='flex items-center justify-start gap-x-3'>
											<span className='bg-[#B5B6F7] h-5 w-5 rounded-full p-[3px] flex justify-center items-center'>
												<Check className='text-primary h-4 w-4' />
											</span>
											<Paragraph>{feature}</Paragraph>
										</div>
									))}
								</div>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className='flex items-center justify-center w-full pt-28'>
					<Paragraph>Need more details about our plans ?</Paragraph>
					<Button variant='link' asChild className='px-2 underline' size='sm'>
						<Link href='/pricing' className='text-primary'>
							check compare plans page
						</Link>
					</Button>
				</div>
			</Container>
		</Section>
	);
};
