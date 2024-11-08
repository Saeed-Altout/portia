import { cn } from '@/lib/utils';

export const OfferList = ({ offer, offerIndex }: { offer: Offer; offerIndex: number }) => {
	return (
		<div>
			{offer.package?.feature_groups?.map((featureGroup, groupIndex) => (
				<ul key={groupIndex} className='flex flex-col border-b'>
					<li
						className={cn(
							'py-6 px-4 flex justify-end md:justify-center items-center text-gray-500 text-center text-sm odd:bg-white even:bg-[#F5F5FA] relative featureGroup-item',
							offerIndex !== 0 && 'before:md:hidden'
						)}
						data-content={featureGroup.name}
					></li>
					{featureGroup.features?.map((feature, featureIndex) => (
						<li
							key={featureIndex}
							className={cn(
								'py-6 px-4 flex justify-end md:justify-center items-center text-gray-500 text-center text-sm odd:bg-white even:bg-[#F5F5FA] relative feature-item',
								offerIndex !== 0 && 'before:md:hidden'
							)}
							data-content={feature.name}
						>
							<p className={cn(offerIndex === 0 && 'md:w-1/2 md:ml-auto')}>
								{typeof feature.value === 'string' ? (
									feature.value
								) : feature.value === true ? (
									<span className='cell-check'>✔</span>
								) : (
									<span>━</span>
								)}
							</p>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};
