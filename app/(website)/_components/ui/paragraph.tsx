import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const paragraphVariants = cva("text-base font-normal leading-6 text-gray-500", {
  variants: {
    size: {
      default: "text-base leading-6",
      sm: "text-sm leading-5",
      md: "text-md leading-6",
      lg: "text-lg leading-7",
      xl: "text-xl leading-8",
    },
    variant: {
      default: "text-gray-500",
      gray: "text-gray-400",
      primary: "text-gray-800",
      secondary: "text-gray-secondary",
      danger: "text-red-600",
      success: "text-green-500",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size, variant, className, children, ...props }, ref) => {
    return (
      <p
        className={cn(paragraphVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
