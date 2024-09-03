import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { blogsData } from '@website/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { renderStyleCategory } from '@/app/(website)/utils/render-style-category';

export const AllBlogs = () => {
	return (
		<section className='max-container section space-y-5'>
			<div className='space-y-8 mb-16'>
				<h3 className='text-xl md:text-2xl font-semibold'>All blog posts</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
					{blogsData.map((blog, index) => (
						<>
							{!blog.isFavorite && (
								<Card className='overflow-hidden border-none shadow-none rounded-none space-y-6' key={index}>
									<CardHeader className='p-0'>
										<Image
											src={blog.imgUrl}
											alt={blog.title}
											className='object-cover max-h-[240px] w-full h-full'
											width={1000}
											height={1000}
										/>
									</CardHeader>
									<CardContent className='space-y-3 p-0'>
										<p className='text-primary font-semibold text-sm'>{blog.published}</p>
										<div className='flex items-center justify-between'>
											<h3 className='text-xl md:text-2xl font-semibold'>{blog.title}</h3>
											<Link href={blog.url}>
												<ArrowUpRight className='h-6 w-6' />
											</Link>
										</div>
										<p>{blog.description}</p>
										<div className='space-x-2'>
											{blog.categories.map((category, index) => (
												<span
													className={cn(
														'px-3 py-1 text-sm font-medium w-fit rounded-full',
														renderStyleCategory(category)
													)}
													key={index}
												>
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
			</div>
			<Separator />
			<Pagination className='w-full'>
				<PaginationContent className='w-full flex items-center justify-between text-gray-primary'>
					<PaginationItem>
						<PaginationPrevious href='#' />
					</PaginationItem>
					<div className='flex items-center justify-center'>
						<PaginationItem>
							<PaginationLink href='#'>1</PaginationLink>
						</PaginationItem>
						<PaginationItem className='hidden md:block'>
							<PaginationLink href='#'>2</PaginationLink>
						</PaginationItem>
						<PaginationItem className='hidden lg:block'>
							<PaginationLink href='#'>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem className='hidden lg:block'>
							<PaginationLink href='#'>8</PaginationLink>
						</PaginationItem>
						<PaginationItem className='hidden md:block'>
							<PaginationLink href='#'>9</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>10</PaginationLink>
						</PaginationItem>
					</div>
					<div>
						<PaginationItem>
							<PaginationNext href='#' />
						</PaginationItem>
					</div>
				</PaginationContent>
			</Pagination>
		</section>
	);
};
