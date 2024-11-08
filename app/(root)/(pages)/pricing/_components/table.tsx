import { HTMLAttributes } from "react";
import { CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

const Row = ({
  children,
  title,
  className,
  ...props
}: { title: string } & HTMLAttributes<HTMLElement>) => (
  <tr className={cn("flex items-center lg:table-row", className)} {...props}>
    <td
      className={cn(
        "block text-left px-4 lg:px-6 py-4 lg:py-5 text-sm font-medium lg:table-cell",
        className
      )}
      {...props}
    >
      {title}
      <CircleHelp className="h-4 w-4 text-gray-500 inline-block ml-1" />
    </td>
    {children}
  </tr>
);

export { Row };
