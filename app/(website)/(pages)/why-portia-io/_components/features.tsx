import { Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { featuresData } from '@website/constants';
import { Icon } from '@website/_components/ui/icon';
import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Features = () => {
	return (
		<Section space='wide'>
			<Container size='wide' className='items-start justify-between lg:flex-row gap-16'>
				<div className='max-w-[360px] space-y-5 relative'>
					<Icon>
						<Zap className='text-primary h-5 w-5' />
					</Icon>
					<h1 className='text-3xl md:text-4xl font-semibold'>What makes Portia.io Different ?</h1>
					<Paragraph>We provide a lots of incredible features that you will need!</Paragraph>
				</div>
				<div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16'>
					{featuresData.map(({ title, description }, index) => (
						<Card key={index} className='shadow-none border-none'>
							<CardContent className='space-y-2 px-0'>
								<h3 className='font-medium text-xl capitalize'>{title}</h3>
								<Paragraph>{description}</Paragraph>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
