import { Map, Hero, Plans } from './_components';
import { CTA, FAQs, Features, Statistic, Testimonials } from '@website/_components/sections';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Map />
			<Statistic />
			<Features />
			<Testimonials />
			<Plans />
			<FAQs />
			<CTA />
		</main>
	);
}
