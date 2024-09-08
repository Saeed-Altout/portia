import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Hero = () => {
	return (
		<Section space='wide'>
			<Container size='wide' view='vertical' className='justify-center items-start gap-y-6 text-left'>
				<div className='space-y-3'>
					<span className='block text-primary font-semibold'>Published 13 Jan 2022</span>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>A conversation with Lucy Bond</h1>
				</div>
				<Paragraph size='lg' className='max-w-4xl'>
					Lucy Bond is an interior designer who started her career in New Zealand, working for large architectural firms. We chatted to her about design and starting her own studio.
				</Paragraph>
			</Container>
		</Section>
	);
};
