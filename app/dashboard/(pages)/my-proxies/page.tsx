'use client';
import * as React from 'react';

import { Plus } from 'lucide-react';

import { columnsActiveProxies, columnsExpiredProxies } from './_components/columns';

import { Heading } from '@dashboard/_components/ui/heading';
import { DataTable } from '@dashboard/_components/ui/data-table';
import { ProxiesCard } from '@dashboard/_components/cards/proxies-card';

import { Button } from '@/components/ui/button';

import { useStoreModal } from '@/app/dashboard/hooks/modals/use-store-modal';

import { proxiesData, proxiesTableData } from '@dashboard/constants';

export default function MyProxiesPage() {
	const storeModal = useStoreModal();

	const ActiveProxies = proxiesTableData.filter((item) => item.status === true && item);
	const ExpiredProxies = proxiesTableData.filter((item) => item.status === false && item);

	return (
		<>
			{/* Heading Section */}
			<Heading title='Welcome back, Jafar'>
				<div className='flex items-center justify-center gap-3'>
					<Button variant='outline' onClick={() => storeModal.onOpenActivateNewProxy()}>
						<Plus className='h-4 w-4 mr-2' /> Activate Proxies
					</Button>

					<Button variant='outline' onClick={() => storeModal.onOpenAddFunds()}>
						<Plus className='h-4 w-4 mr-2' /> Add Fund
					</Button>
				</div>
			</Heading>
			{/* Statistic Section */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{proxiesData.map((item, index) => (
					<ProxiesCard key={index} initialData={item} />
				))}
			</div>
			{/* Tables Section */}
			<DataTable title='My Active Proxies' data={ActiveProxies} columns={columnsActiveProxies} />
			<DataTable title='My Expired Proxies' data={ExpiredProxies} columns={columnsExpiredProxies} />
		</>
	);
}
