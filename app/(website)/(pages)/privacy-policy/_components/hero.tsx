import { Button } from '@/components/ui/button';

import { Container } from '@website/_components/ui/container';
import { Section } from '@website/_components/ui/section';
import { Paragraph } from '@website/_components/ui/paragraph';

export const Hero = () => {
	return (
		<Section space='wide' className='bg-[#F5F5FA] h-[492px]'>
			<Container size='wide' className='gap-y-10 text-center items-center justify-center'>
				<div className='space-y-6 max-w-3xl'>
					<Paragraph className='text-primary font-semibold'>Privacy Policy</Paragraph>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>We care about your privacy</h1>
					<Paragraph size='lg' className='text-xl leading-8'>
						Your privacy is important to us at Portia. We respect your privacy regarding any information we may collect from you across our website.
					</Paragraph>
				</div>
				<div className='bg-[#E9E9F2] p-1.5 rounded-[8px] space-x-2'>
					<Button variant='ghost' className='bg-white text-lg'>
						Human-friendly
					</Button>
					<Button variant='ghost' className='text-gray-primary text-lg bg-transparent hover:bg-transparent'>
						Legal nonsense
					</Button>
				</div>
			</Container>
		</Section>
	);
};
