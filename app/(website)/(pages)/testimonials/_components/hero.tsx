import { Button } from '@/components/ui/button';

import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';

export const Hero = () => {
	return (
		<Section space='wide' className='bg-[#F5F5FA]'>
			<Container size='wide' view='vertical' className='justify-center items-center gap-y-8 md:gap-y-9 lg:gap-y-10 text-center'>
				<span className='block text-primary font-semibold'>Testimonials</span>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Why To Choose Portia.io?</h1>
				<Paragraph size='lg' className='max-w-5xl'>
					At Portia.io, we strive to deliver exceptional proxy services to our customers. Our dedication to quality and customer satisfaction shines through in the feedback we receive.
				</Paragraph>
				<div className='space-x-3'>
					<Button variant='outline'>Visit Trustpilot</Button>
					<Button>Write Review</Button>
				</div>
			</Container>
		</Section>
	);
};
