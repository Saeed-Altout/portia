import { featuresData } from '@website/constants';
import { Heading } from '@website/_components/common/heading';

import { Card, CardContent } from '@/components/ui/card';

import { Icon } from '@website/_components/ui/icon';
import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Features = () => {
	return (
		<Section space='wide'>
			<Container size='wide' className='gap-y-12 md:gap-y-16'>
				<Heading title='What makes Portia.io Different?' description='We provide a lots of incredible features that you will need!' />
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
					{featuresData.map(({ icon: LIcon, title, description }, index) => (
						<Card key={index} className='shadow-none border-none space-y-5'>
							<Icon>
								<LIcon className='text-primary h-5 w-5' />
							</Icon>
							<CardContent className='space-y-2 p-0'>
								<Paragraph size='lg' className='font-medium text-black-primary capitalize'>
									{title}
								</Paragraph>
								<Paragraph>{description}</Paragraph>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
