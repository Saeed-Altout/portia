import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("h-full w-full", {
  variants: {
    space: {
      default: "py-20",
      wide: "py-24",
      narrow: "py-5",
    },
  },
  defaultVariants: {
    space: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, space, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "section";
    return (
      <Comp
        className={cn(sectionVariants({ space, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section, sectionVariants };
