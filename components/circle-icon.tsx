import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export const CircleIcon = ({
  icon: Icon,
  theme,
}: {
  icon: LucideIcon;
  theme: string;
}) => {
  const bgColor = {
    primary: "bg-[#B5B6F7]",
    mute: "bg-[#E9E9F2]",
    danger: "bg-[#FFE4E8]",
    success: "bg-[#B5F7F6]",
  }[theme];

  const borderColor = {
    primary: "border-[#D4D4FF]",
    mute: "border-[#F5F5FA]",
    danger: "border-[#FFF1F3]",
    success: "border-[#D4FFFE]",
  }[theme];

  const iconColor = {
    primary: "text-primary",
    mute: "text-[#4B4B57]",
    danger: "text-[#E31B54]",
    success: "text-[#11807E]",
  }[theme];

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
