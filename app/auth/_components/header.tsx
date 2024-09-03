import { Logo } from '@/components/common/Logo';

export const Header = () => {
	return (
		<div className='block lg:hidden px-6'>
			<div className='w-[144px] h-[35px] my-9'>
				<Logo />
			</div>
			<div className='space-y-2'>
				<h1 className='lg:text-white text-2xl lg:text-6xl font-medium leading-8 lg:leading-[72px]'>
					Start turning your Browsing to Unlimited Efficiency.
				</h1>
				<p className='lg:text-white lg:text-xl lg:font-medium leading-6 lg:leading-8'>
					Create your account and get full access to our dashboard. Trusted by over 40,000 professionals.
				</p>
			</div>
		</div>
	);
};
