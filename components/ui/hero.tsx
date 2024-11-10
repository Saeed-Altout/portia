import * as React from "react";

import { cn } from "@/lib/utils";

interface HeroComProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  label?: string;
  description?: string;
}

export const HeroCom = ({
  title,
  description,
  label,
  className,
  children,
}: HeroComProps) => {
  return (
    <section id="hero" className={className}>
      <div className="py-24 flex flex-col justify-center items-center text-center gap-6">
        <div className="space-y-3">
          {label && (
            <span className="text-[#03055E] font-semibold">{label}</span>
          )}
          <h1 className="text-[#0A0A0A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            {title}
          </h1>
        </div>
        <p className="text-[#727282] max-w-[768px] lg:text-xl">{description}</p>
        {children}
      </div>
    </section>
  );
};
