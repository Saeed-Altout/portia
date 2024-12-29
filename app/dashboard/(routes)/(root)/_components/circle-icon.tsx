import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export const CircleIcon = ({
  icon: Icon,
  theme,
}: {
  icon: LucideIcon;
  theme: string;
}) => {
  const bgColor = theme === "primary" ? "bg-[#B5B6F7]" : "bg-[#B5F7F6]";
  const borderColor =
    theme === "primary" ? "border-[#D4D4FF]" : "border-[#D4FFFE]";
  const iconColor = theme === "primary" ? "text-primary" : "text-[#11807E]";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full w-[48px] h-[48px]",
        bgColor,
        "border-8",
        borderColor
      )}
    >
      <Icon className={cn("w-5 h-5", iconColor)} />
    </div>
  );
};
