import * as React from 'react';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: LucideIcon;
	prefix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, icon: Icon, prefix, type, ...props }, ref) => {
	return (
		<>
			{Icon && (
				<div className='relative flex items-center'>
					<span className='absolute left-3'>
						<Icon className='h-4 w-4 text-muted-foreground' />
					</span>
					<input
						type={type}
						className={cn(
							'flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>
			)}
			{prefix && (
				<div className='relative flex items-center'>
					<span className='absolute left-1 border-r border-input bg-background px-2 py-2'>
						<p className='text-sm text-gray-500'>{prefix}</p>
					</span>
					<input
						type={type}
						className={cn(
							'flex h-10 w-full rounded-md border border-input bg-background pl-20 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>
			)}

			{!Icon && !prefix && (
				<input
					type={type}
					className={cn(
						'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className
					)}
					ref={ref}
					{...props}
				/>
			)}
		</>
	);
});
Input.displayName = 'Input';

export { Input };
