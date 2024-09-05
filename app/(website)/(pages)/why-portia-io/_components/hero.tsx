import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';

export const Hero = () => {
	return (
		<Section space='wide' className='bg-[#F5F5FA]'>
			<Container size='wide' view='vertical' className='justify-center items-center gap-y-8 md:gap-y-9 lg:gap-y-10 text-center'>
				<span className='block text-primary font-semibold'>About portia</span>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Why To Choose Portia.io?</h1>
				<Paragraph size='lg' className='max-w-5xl'>
					At Portia.io, we are driven by the desire to provide a reliable, affordable, and flexible proxy service that meets the needs of our diverse clientele. Our journey began with a
					vision to create a proxy service that eliminates the common frustrations users face with traditional providers.
				</Paragraph>
			</Container>
		</Section>
	);
};
