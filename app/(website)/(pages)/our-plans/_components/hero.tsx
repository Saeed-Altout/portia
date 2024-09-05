import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';

export const Hero = () => {
	return (
		<Section space='wide'>
			<Container size='wide' view='vertical' className='justify-center items-center gap-y-8 md:gap-y-9 lg:gap-y-10 text-center'>
				{/* <span className='block text-primary font-semibold'>Pricing</span> */}
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Pricing plans</h1>
				<Paragraph size='lg' className='max-w-5xl'>
					Transparent pricing that grows with your needs.
				</Paragraph>
			</Container>
		</Section>
	);
};
