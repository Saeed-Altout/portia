import { Button } from '@/components/ui/button';

import { Heading } from '@website/_components/common/heading';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';

export const CTA = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<Heading title='Ready To Take Your Online Efficiency to the Next Level ?' description='Join over 40,000+ happy clients already growing with portia.io .'>
					<div className='flex items-center justify-center flex-col md:flex-row gap-3'>
						<Button variant='outline' className='w-full'>
							Contact us
						</Button>
						<Button className='w-full -order-1 md:order-1'>Get Started</Button>
					</div>
				</Heading>
			</Container>
		</Section>
	);
};
