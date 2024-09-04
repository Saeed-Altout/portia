import { statisticData } from '@website/constants';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Statistic = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 w-full'>
					{statisticData.map(({ value, name, description }, index) => (
						<Card key={index} className='pt-4 sm:pt-0 border-t-2 border-x-transparent !border-b-transparent border-primary sm:border-none shadow-none rounded-none space-y-3'>
							<CardHeader className='px-0 p-0'>
								<CardTitle className='text-primary font-semibold text-5xl lg:text-6xl'>{value}</CardTitle>
							</CardHeader>
							<CardContent className='space-y-2 p-0'>
								<Paragraph size='lg' className='sm:text-black-primary font-medium'>
									{name}
								</Paragraph>
								<Paragraph className='hidden sm:block'>{description}</Paragraph>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
