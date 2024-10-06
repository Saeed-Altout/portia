import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const OfferPrice = ({ offer }: { offer: Offer }) => {
	return (
		<div className='w-full flex-1 flex flex-col justify-between items-start gap-y-6 py-6 px-4'>
			<h3 className='font-semibold text-3xl lg:text-5xl'>
				{offer.cost}$
				<span className='text-sm font-medium text-gray-500 ml-2 tracking-wide text-nowrap'>{offer.plan}</span>
			</h3>
			<p className='text-sm flex-1'>{offer.package.description}</p>
			<Button className='w-full' asChild>
				<Link href='/'>Get started</Link>
			</Button>
		</div>
	);
};
