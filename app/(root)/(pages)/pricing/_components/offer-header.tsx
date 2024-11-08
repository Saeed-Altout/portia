export const OfferHeader = ({ offer }: { offer: Offer }) => {
	return (
		<div className='w-full flex justify-start items-start gap-x-2 py-6 px-4 border-b'>
			<h3 className='text-xl font-semibold leading-8'>{offer.package.name}</h3>
			{true && <span className='bg-[#D4D4FF] text-primary px-5 py-1 rounded-full text-sm font-medium'>Popular</span>}
		</div>
	);
};
