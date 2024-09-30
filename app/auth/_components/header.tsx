interface HeaderProps {
	title: string;
	description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
	return (
		<div className='space-y-2'>
			<h3 className='text-xl font-semibold'>{title}</h3>
			<p>{description}</p>
		</div>
	);
};
