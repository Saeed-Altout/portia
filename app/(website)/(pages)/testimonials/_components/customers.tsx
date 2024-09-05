import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { customersData } from '@website/constants';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';

export const Customers = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<Carousel>
					<CarouselContent className='space-x-8'>
						{customersData.map((customer, index) => (
							<CarouselItem key={index} className='min-w-[360px] h-[480px] relative group cursor-pointer basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
								<Image src={customer.imgUrl} alt={customer.agency} fill className='object-cover' />
								<div className='absolute bottom-0 drop-shadow-xl left-0 w-full min-h-[202px] duration-300 ease-in-out bg-white bg-opacity-10 backdrop-blur-lg flex items-center justify-start'>
									<div className='text-left p-6 pb-8 space-y-2'>
										<div className='flex items-center justify-start gap-x-1 group-hover:hidden py-4'>
											<FaStar className='text-white h-4 w-4' />
											<FaStar className='text-white h-4 w-4' />
											<FaStar className='text-white h-4 w-4' />
											<FaStar className='text-white h-4 w-4' />
											<FaStar className='text-white h-4 w-4' />
										</div>
										<Paragraph size='lg' className='text-white hidden group-hover:block py-4'>
											{customer.comment}
										</Paragraph>
										<Paragraph className='text-white font-semibold text-3xl'>{customer.name}</Paragraph>
										<Paragraph size='lg' className='text-white font-semibold mt-2'>
											{customer.position}
										</Paragraph>
										<Paragraph className='text-white'>{customer.agency}</Paragraph>
									</div>
								</div>
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
