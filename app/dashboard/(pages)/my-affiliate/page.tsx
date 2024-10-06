'use client';
import * as React from 'react';

import { ChartColumn, DollarSign } from 'lucide-react';

import { Heading } from '@dashboard/_components/ui/heading';
import { DepositCard } from '@dashboard/_components/cards/deposit-card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { depositsData } from '@dashboard/constants';

import { useOrigin } from '@/hooks/use-origin';

export default function MyAffiliatePage() {
	const origin = useOrigin();
	const [http, host] = origin.split('://');

	return (
		<>
			<Heading title='Welcome back, Jafar' description='your total money is: 0.00$'>
				<div className='flex items-center justify-center gap-3'>
					<Button variant='outline'>
						<ChartColumn className='h-4 w-4 mr-2' /> Draw My Earning
					</Button>
				</div>
			</Heading>
			<div className='max-w-2xl space-y-2'>
				<Input prefix={`${http}://`} type='text' name='url' placeholder={`${host}?aid=9rOcrU`} />
				<p className='text-sm font-normal'>
					10% of all paid payments. from referred users. Over 60 days are credited into your balance.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{depositsData.map((item, index) => (
					<DepositCard key={index} initialData={item} />
				))}
			</div>

			<div className='border rounded-md bg-[#F5F5FA]'>
				<div className='bg-white border-b rounded-t-md py-5 px-6 space-y-1'>
					<h3 className='font-medium text-lg'>Your earning calender</h3>
					<p className='text-sm'>Keep your earning by days</p>
				</div>
				<div className='flex flex-col justify-center items-center h-full min-h-[500px]'>
					<div className='flex flex-col justify-center items-center space-y-3'>
						<DollarSign className='text-gray-600 h-32 w-32' />
						<h3 className='text-gray-600 font-semibold'>There isn&apos;t any earning yet</h3>
						<p>share your affiliate link and start make your earning</p>
					</div>
				</div>
			</div>
		</>
	);
}
