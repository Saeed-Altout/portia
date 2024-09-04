import Image from 'next/image';

import { Container } from '@website/_components/ui/container';
import { Section } from '@website/_components/ui/section';

export const Map = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<div className='relative h-[250px] md:h-[450px] lg:h-[800px]'>
					<Image src='/icons/map.svg' alt='Map' className='w-full h-full object-contain' fill />
				</div>
			</Container>
		</Section>
	);
};
