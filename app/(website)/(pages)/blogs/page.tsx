import { CTA } from '@website/_components/sections';
import { AllBlogs, Hero, RecentBlogs } from './_components';

export default function BlogsPage() {
	return (
		<main>
			<Hero />
			<RecentBlogs />
			<AllBlogs />
			<CTA />
		</main>
	);
}
