import { ContactForm } from './_components';

import { Heading } from '@website/_components/common';
import { Statistic } from '@website/_components/sections';

import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';

export default function ContactUsPage() {
	return (
		<main>
			<Section className='pt-16 pb-24'>
				<Container size='wide' className='gap-y-12'>
					<Heading title='Get in touch' description='Our friendly team would love to hear from you.' />
					<ContactForm />
				</Container>
			</Section>
			<div className='hidden lg:block'>
				<Statistic />
			</div>
		</main>
	);
}
