'use client';

import Image from 'next/image';

import { testimonials } from '@website/constants';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { Section } from '@website/_components/ui/section';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Container } from '@website/_components/ui/container';

export const Testimonials = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<Carousel>
					<CarouselContent>
						{testimonials.map(({ rate, name, comment, position }, index) => (
							<CarouselItem key={index}>
								<Card className='border-none shadow-none space-y-12'>
									<div className='flex items-center justify-start gap-x-1'>
										{[...Array(rate)].map((_, index) => (
											<Image src='/icons/star.svg' alt='Star icon' width={20} height={20} key={index} />
										))}
									</div>
									<CardContent className='p-0'>
										<h3 className='text-2xl leading-8 md:text-3xl md:leading-9 lg:text-4xl lg:leading-[44px] font-medium  '>{comment}</h3>
									</CardContent>
									<CardFooter className='p-0 flex flex-row items-center gap-4'>
										<Avatar className='h-[56px] w-[56px]'>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
										</Avatar>
										<div className='flex flex-col items-start py-2'>
											<Paragraph size='lg' className='font-medium text-black-primary'>
												{name}
											</Paragraph>
											<Paragraph>{position}</Paragraph>
										</div>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className='w-fit mr-auto space-x-8 mt-8'>
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</Container>
		</Section>
	);
};
