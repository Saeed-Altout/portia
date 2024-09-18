import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const circleVariants = cva("flex items-center justify-center rounded-full", {
  variants: {
    fill: {
      default: "bg-[#B5B6F7] border-[#D4D4FF]",
      success: "bg-[#B5F7F6] border-[#D4FFFE]",
      alert: "bg-[#F7B5BF] border-[#FFD4DA]",
      primary: "bg-primary",
      secondary: "bg-secondary",
      muted: "bg-gray-200",
    },
    border: {
      none: "",
      small: "border-2",
      medium: "border-4",
      large: "border-8",
    },
    size: {
      sm: "w-[32px] h-[32px]",
      md: "w-[48px] h-[48px]",
      lg: "w-[64px] h-[64px]",
    },
  },
  defaultVariants: {
    fill: "default",
    border: "large",
    size: "md",
  },
});

const iconVariants = cva("text-primary", {
  variants: {
    theme: {
      primary: "text-primary",
      success: "text-[#11807E]",
      secondary: "text-secondary",
      alert: "text-[#801121]",
      muted: "text-gray-500",
      danger: "text-red-500",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    theme: "primary",
    size: "md",
  },
});

export interface CircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circleVariants> {
  asChild?: boolean;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>(
  ({ className, fill, border, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(circleVariants({ fill, border, size, className }))}
        {...props}
      />
    );
  }
);

Circle.displayName = "Circle";

export interface IconProps
  extends React.HTMLAttributes<SVGElement>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  asChild?: boolean;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: Comp, theme, size, className, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(iconVariants({ theme, size, className }))}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Circle, Icon };
