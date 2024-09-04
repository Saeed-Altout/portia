'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const iconVariants = cva('border-[8px] flex items-center justify-center rounded-full', {
	variants: {
		variant: {
			default: 'bg-[#B5B6F7] border-[#D4D4FF] text-primary',
			success: 'bg-[#B5F7F6] border-[#D4FFFE] text-[#11807E]',
		},
		size: {
			default: 'w-[48px] h-[48px]',
			sm: 'w-[35px] h-[35px]',
			lg: 'w-[56px] h-[56px]',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface IconProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconVariants> {
	asChild?: boolean;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'div';
	return <Comp className={cn(iconVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Icon.displayName = 'Icon';

export { Icon, iconVariants };
