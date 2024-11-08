import { cn } from '@/lib/utils';

import { OfferHeader } from './offer-header';
import { OfferPrice } from './offer-price';
import { OfferList } from './offer-list';

export const OfferCard = ({ offer, offerIndex }: { offer: Offer; offerIndex: number }) => {
	return (
		<div className={cn(offerIndex === 0 && 'col-span-1 md:col-span-2')}>
			<div
				className={cn(
					'min-h-[320px] flex justify-start flex-col items-center',
					offerIndex === 0 && 'md:w-[50%] md:ml-auto'
				)}
			>
				<OfferHeader offer={offer} />
				<OfferPrice offer={offer} />
			</div>
			<OfferList offer={offer} offerIndex={offerIndex} />
		</div>
	);
};
