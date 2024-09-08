import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { blogsData } from '@website/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { renderStyleCategory } from '@/app/(website)/utils/render-style-category';

export const RecentBlogs = () => {
	return (
		<section className='max-container section'>
			<div className='space-y-8'>
				<h3 className='text-xl md:text-2xl font-semibold'>Recent blog posts</h3>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='row-span-1 lg:row-span-2 col-span-1 lg:max-w-[592px]'>
						{blogsData.map((blog, index) => (
							<div key={index}>
								{blog.isFavorite && blog.order === 1 && (
									<Card className='border-none shadow-none rounded-none space-y-6'>
										<CardHeader className='p-0 overflow-hidden max-h-[240px]'>
											<Image src={blog.imgUrl} alt={blog.title} className='object-cover w-full h-full' width={1000} height={1000} />
										</CardHeader>
										<CardContent className='space-y-3 p-0'>
											<p className='text-primary font-semibold text-sm'>{blog.published}</p>
											<div className='flex items-center justify-between'>
												<h3 className='text-xl md:text-2xl font-semibold'>{blog.title}</h3>
												<Link href={`/blogs/${index}`} className='hover:text-primary'>
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
							</div>
						))}
					</div>

					<div>
						{blogsData.map((blog, index) => (
							<>
								{blog.isFavorite && blog.order !== 1 && (
									<Card
										key={index}
										className='flex flex-col lg:flex-row w-full col-span-1 row-span-1 overflow-hidden border-none shadow-none rounded-none items-start lg:space-x-6 space-y-6 lg:space-y-0 mb-8'
									>
										<CardHeader className='p-0 overflow-hidden max-h-[200px]'>
											<Image src={blog.imgUrl} alt={blog.title} className='object-cover w-full h-full' width={1000} height={1000} />
										</CardHeader>
										<CardContent className='space-y-3 lg:max-w-[270px] p-0'>
											<p className='text-primary font-semibold text-sm'>{blog.published}</p>
											<div className='flex items-center justify-between'>
												<h3 className='text-xl font-semibold'>{blog.title}</h3>
												<Link href={blog.url}>
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
				</div>
			</div>
		</section>
	);
};
