import { Countries, Features, Hero } from './_components';

import { FAQs } from '@website/_components/sections/faqs';
import { CTA } from '@website/_components/sections/cta';

import { Testimonials } from '@website/_components/sections/testimonials';

export default function WhyPortiaIo() {
	return (
		<main>
			<Hero />
			<Features />
			<Testimonials />
			<Countries />
			<FAQs />
			<CTA />
		</main>
	);
}
