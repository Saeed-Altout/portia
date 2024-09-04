import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('w-full h-full mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex items-start justify-start', {
	variants: {
		size: {
			default: 'container',
			narrow: 'max-w-5xl',
			wide: 'max-w-7xl',
			sx: 'max-w-xs',
			sm: 'max-w-sm',
			md: 'max-w-md',
			lg: 'max-w-lg',
			xl: 'max-w-xl',
			xxl: 'max-w-xxl',
		},
		view: {
			default: 'flex-col',
			horizontal: 'flex-row',
			vertical: 'flex-col',
		},
	},
	defaultVariants: {
		size: 'default',
		view: 'default',
	},
});

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
	asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ className, size, view, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'div';
		return <Comp className={cn(containerVariants({ size, view, className }))} ref={ref} {...props} />;
	}
);

Container.displayName = 'Container';

export { Container, containerVariants };
