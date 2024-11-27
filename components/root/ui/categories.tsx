import * as React from "react";

import { cn } from "@/lib/utils";
import { renderStyleCategory } from "@/utils/render-style-category";

interface CategoriesProps {
  items: string[];
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="space-x-2">
      {items.map((item, index) => (
        <span className={cn("px-3 py-1 text-sm font-medium w-fit rounded-full", renderStyleCategory(item))} key={index}>
          {item}
        </span>
      ))}
    </div>
  );
};
