'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Container } from '@website/_components/ui/container';
import { Paragraph } from '@website/_components/ui/paragraph';
import { Section } from '@website/_components/ui/section';

import { blogsData } from '@website/constants';
import { renderStyleCategory } from '@website/utils/render-style-category';

export const LatestBlog = () => {
	return (
		<Section space='wide'>
			<Container size='wide' className='gap-y-16'>
				<div className='flex flex-col justify-center items-start gap-y-6 text-left'>
					<div className='space-y-3'>
						<span className='block text-primary font-semibold'>Our blog</span>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Lastest blog posts</h1>
					</div>
					<Paragraph size='lg' className='max-w-4xl'>
						Tool and strategies modern teams need to help their companies grow.
					</Paragraph>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
					{blogsData.map((blog, index) => (
						<>
							{blog.isFavorite && (
								<Card className='overflow-hidden border-none shadow-none rounded-none space-y-6' key={index}>
									<CardHeader className='p-0'>
										<Image src={blog.imgUrl} alt={blog.title} className='object-cover max-h-[240px] w-full h-full' width={1000} height={1000} />
									</CardHeader>
									<CardContent className='space-y-3 p-0'>
										<p className='text-primary font-semibold text-sm'>{blog.published}</p>
										<div className='flex items-center justify-between'>
											<h3 className='text-xl md:text-2xl font-semibold'>{blog.title}</h3>
											<Link href={`/blogs/${index}`}>
												<ArrowUpRight className='h-6 w-6' />
											</Link>
										</div>
										<p>{blog.description}</p>
										<div className='space-x-2'>
											{blog.categories.map((category, index) => (
												<span className={cn('px-3 py-1 text-sm font-medium w-fit rounded-full', renderStyleCategory(category))} key={index}>
													{category}
												</span>
											))}
										</div>
									</CardContent>
								</Card>
							)}
						</>
					))}
				</div>
			</Container>
		</Section>
	);
};
