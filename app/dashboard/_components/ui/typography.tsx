import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("tracking-wide", {
  variants: {
    variant: {
      h1: "text-4xl !font-semibold",
      h2: "text-3xl !font-semibold",
      h3: "text-2xl !font-semibold",
      h4: "text-xl !font-medium",
      h5: "text-lg !font-medium",
      h6: "text-base !font-medium",
      p: "text-base !font-normal",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    theme: {
      default: "text-black-primary",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-gray-500",
      danger: "text-red-600",
    },
  },
  defaultVariants: {
    variant: "p",
    align: "left",
    weight: "normal",
    theme: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { as: Component = "p", className, variant, align, weight, theme, ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({ variant, align, weight, theme, className })
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
