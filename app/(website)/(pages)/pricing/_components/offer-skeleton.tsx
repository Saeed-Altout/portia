import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export const OfferSkeleton = ({ offerIndex }: { offerIndex: number }) => {
	return (
		<div className={cn(offerIndex === 0 && 'col-span-1 md:col-span-2')}>
			<div
				className={cn(
					'min-h-[320px] flex justify-start flex-col items-center',
					offerIndex === 0 && 'md:w-[50%] md:ml-auto'
				)}
			>
				<div className='w-full flex justify-start items-center gap-x-2 py-6 px-4 border-b'>
					<Skeleton className='h-6 w-32 rounded-md' />
					<Skeleton className='h-8 w-20 rounded-full' />
				</div>
				<div className='w-full flex-1 flex flex-col justify-between items-start gap-y-6 py-6 px-4'>
					<div className='flex items-end justify-start gap-x-2 w-full'>
						<Skeleton className='h-20 w-[50%] rounded-md' />
						<Skeleton className='h-5 w-[20%] rounded-md' />
					</div>
					<Skeleton className='h-5 w-full rounded-md' />
					<Skeleton className='h-5 w-[70%] rounded-md' />
					<Skeleton className='h-12 w-full rounded-md' />
				</div>
			</div>
			{[...Array(5)]?.map((_, groupIndex) => (
				<ul key={groupIndex} className='flex flex-col border-b'>
					<li
						className={cn(
							'py-6 px-4 flex justify-end md:justify-center items-center  odd:bg-white even:bg-[#f5f5faa6]',
							offerIndex !== 0 && 'before:md:hidden'
						)}
						data-content={''}
					></li>
					{[...Array(3)].map((_, featureIndex) => (
						<li
							className={cn(
								'py-6 px-4 flex justify-end md:justify-center items-center odd:bg-white even:bg-[#f5f5faa6]',
								offerIndex !== 0 && 'before:md:hidden'
							)}
							data-content={''}
							key={featureIndex}
						>
							<Skeleton className={cn('h-5 w-20 rounded-md mr-auto', offerIndex !== 0 && 'md:hidden')} />
							<span className={cn(offerIndex === 0 && 'md:w-1/2 md:ml-auto')}>
								<Skeleton className='h-5 w-10 rounded-md mx-auto' />
							</span>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};
