import { Hero, Plans } from './_components';
import { CTA, FAQs, Features, Testimonials } from '@website/_components/sections';

export default function OurPlansPage() {
	return (
		<main>
			<Hero />
			<Plans />
			<Features />
			<Testimonials />
			<FAQs />
			<CTA />
		</main>
	);
}
