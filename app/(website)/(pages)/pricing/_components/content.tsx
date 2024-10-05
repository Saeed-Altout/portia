import * as React from 'react';
import Link from 'next/link';

import { data } from '@website/constants';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { Container } from '@website/_components/ui/container';
import { Section } from '@website/_components/ui/section';

export const Content = () => {
	return (
		<Section>
			<Container>
				<div className='w-full grid grid-cols-1 md:grid-cols-4'>
					{data.map((offer, offerIndex) => (
						<div key={offerIndex} className={cn(offerIndex === 0 && 'col-span-1 md:col-span-2')}>
							<div className={cn('offer-table-head', offerIndex === 0 && 'md:w-[50%] md:ml-auto')}>
								<div className='offer-table-head-info'>
									<h3 className='offer-table-head-info-name'>{offer.package?.name}</h3>
									{true && <span className='offer-table-head-info-popular'>Popular</span>}
								</div>
								<div className='offer-table-head-content'>
									<h3 className='offer-table-head-content-price'>
										{offer.cost}
										<span className='offer-table-head-content-plan'>{offer.plan?.name}</span>
									</h3>
									<p className='offer-table-head-content-description'>{offer.package?.description}</p>
									<Button className='w-full' asChild>
										<Link href='/'>Get started</Link>
									</Button>
								</div>
							</div>
							<div>
								{offer.package?.feature_groups?.map((featureGroup, groupIndex) => (
									<React.Fragment key={groupIndex}>
										<ul className='flex flex-col border-b'>
											{featureGroup.features?.map((feature, featureIndex) => (
												<li
													className={cn(
														'cell relative feature-item',
														offerIndex !== 0 && 'before:md:hidden'
													)}
													data-content={feature.name}
													key={featureIndex}
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
									</React.Fragment>
								))}
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
