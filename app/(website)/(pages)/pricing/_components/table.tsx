import { HTMLAttributes, ReactNode } from 'react';
import { CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Table = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<table className={cn('w-full', className)} {...props}>
		{children}
	</table>
);

const Row = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<tr className={cn('block md:table-row bg-white', className)} {...props}>
		{children}
	</tr>
);

const Cell = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<td className={cn('p-6 text-center font-medium text-sm text-nowrap w-full md:w-auto', className)} {...props}>
		{children}
	</td>
);

const Head = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<th className={cn('block md:table-cell px-6 pt-8 pb-0 space-y-6', className)} {...props}>
		{children}
	</th>
);

const Header = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<thead className={cn('block md:table-header-group', className)} {...props}>
		{children}
	</thead>
);

const Body = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<tbody className={cn('block md:table-row-group', className)} {...props}>
		{children}
	</tbody>
);

const Footer = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<tfoot className={cn('block md:table-footer-group', className)} {...props}>
		{children}
	</tfoot>
);

const CustomRow = ({
	children,
	title,
	className,
	...props
}: { children?: ReactNode; title: string } & HTMLAttributes<HTMLElement>) => (
	<Row className={className} {...props}>
		<Cell className='text-left'>
			{title}
			<CircleHelp className='h-4 w-4 text-gray-primary inline-block ml-1' />
		</Cell>
		{children}
	</Row>
);

const CustomCell = ({ title, className, ...props }: { title: string } & HTMLAttributes<HTMLElement>) => (
	<Row>
		<Cell className={cn('text-left pb-2 pt-10 bg-white text-primary', className)}>{title}</Cell>
	</Row>
);

const Icon = ({ isActive, className, ...props }: { isActive?: boolean } & HTMLAttributes<HTMLElement>) => (
	<Cell className={className} {...props}>
		{isActive ? <span className='text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 p-1 mx-auto'>✔</span> : '━'}
	</Cell>
);

const Text = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => (
	<Cell className={cn('text-gray-primary', className)} {...props}>
		{children}
	</Cell>
);

export { Table, Header, Body, Footer, Row, Cell, Icon, Text, CustomCell, CustomRow, Head };
