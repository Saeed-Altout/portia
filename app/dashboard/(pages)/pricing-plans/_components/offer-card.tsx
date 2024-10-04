import { Zap } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Circle, Icon } from '@/components/shared/circle-icon';
import { Skeleton } from '@/components/ui/skeleton';

export const OfferCard = ({ offer }: { offer: any }) => (
	<div className='flex items-start md:items-center justify-between flex-col md:flex-row p-4 border rounded-lg gap-4'>
		<div className='w-full flex items-center gap-x-4'>
			<Circle fill={'primary'}>
				<Icon icon={Zap} theme={'primary'} />
			</Circle>
			<div>
				<h4 className='text-sm font-medium'>{offer.name}</h4>
				<p className='text-sm text-gray-500'>{offer.description}</p>
			</div>
		</div>
		<div className='w-full md:w-fit flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-1'>
			<p className={cn('text-base md:text-sm font-semibold text-primary')}>{offer.cost}</p>
			<Button size='sm' className='w-full'>
				Activate
			</Button>
		</div>
	</div>
);

export const OfferCardSkeleton = () => {
	return (
		<div className='flex items-start md:items-center justify-between flex-col md:flex-row p-4 border rounded-lg gap-4'>
			<div className='w-full flex items-center gap-x-4'>
				<Skeleton className='w-10 h-10 rounded-full' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='w-24 h-4' />
					<Skeleton className='w-36 h-3' />
				</div>
			</div>
			<div className='w-full md:w-fit flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-1'>
				<Skeleton className='w-12 h-4' />
				<Skeleton className='w-full h-8 md:w-24' />
			</div>
		</div>
	);
};
