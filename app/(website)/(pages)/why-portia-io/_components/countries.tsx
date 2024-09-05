import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { countriesData } from '@website/constants';

import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';
import { Heading } from '@website/_components/common';

export const Countries = () => {
	return (
		<Section space='wide'>
			<Container size='wide' className='items-start justify-between lg:flex-row gap-x-8 gap-y-6 lg:gap-y-12'>
				<Heading
					heading='countries'
					title='Supported Countries and IP Availability'
					description='Portia.io offers proxies in multiple countries, ensuring you have the global reach you need.'
					className='max-w-[384px]'
				/>
				<div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
					{countriesData.map(({ name, users, flagUrl }, index) => (
						<Card key={index} className='shadow-none border-none flex items-center justify-start gap-x-6'>
							<Avatar className='h-20 w-20'>
								<AvatarImage src={flagUrl} />
								<AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
							</Avatar>
							<CardContent className='p-0'>
								<h3 className='font-medium text-lg capitalize'>{name}</h3>
								<Paragraph>{users} IPs</Paragraph>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
