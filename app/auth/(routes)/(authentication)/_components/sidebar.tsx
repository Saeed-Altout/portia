import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Sidebar = () => {
	return (
		<div className='hidden lg:flex items-center justify-center bg-gradient-to-tr from-[#000019] to-[#111280] h-screen w-2/3'>
			<div className='max-w-[672px] space-y-12'>
				<Image src='/icons/favicon.svg' alt='Logo icon' width={80} height={80} className='h-20 w-20' />
				<div className='space-y-1 lg:space-y-6'>
					<h1 className='text-black-primary lg:text-white text-2xl lg:text-6xl font-medium leading-8 lg:leading-[72px]'>
						Start turning your Browsing to Unlimited Efficiency.
					</h1>
					<p className='text-black-primary lg:text-white text-xl font-normal lg:font-medium leading-6 lg:leading-8'>
						Create your account and get full access to our dashboard. Trusted by over 40,000 professionals.
					</p>
					<div className='flex items-center justify-start gap-4'>
						<div className='flex items-center justify-start space-x-[-10px]'>
							{[...Array(5)].map((_, index) => (
								<Avatar key={index} className='h-10 w-10 border-white border-2'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							))}
						</div>
						<div className='text-black-primary lg:text-white text-base font-medium leading-6 flex flex-col'>
							<div className='flex items-center justify-start'>
								{[1, 2, 3, 4, 5].map((_, index) => (
									<Image src='/icons/star.svg' alt='Star icon' width={20} height={20} key={index} />
								))}
								<span className='ml-1'>5.0</span>
							</div>
							<p className='text-white'> © Portia.io 2024</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
