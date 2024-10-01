import { Logo } from '@/components/shared/logo';

interface HeaderProps {
	title: string;
	description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
	return (
		<div className='space-y-8'>
			<div className='relative h-auto w-[115px] lg:hidden'>
				<Logo />
			</div>
			<div className='space-y-2'>
				<h3 className='text-xl font-semibold'>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
