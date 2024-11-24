import { LucideIcon } from "lucide-react";
import { Circle, Icon } from "@/components/ui/circle-icon";

interface CardProps {
  icon: LucideIcon;
  label: string;
  theme: any;
  value: string;
}
export const Card = ({ icon, label, theme, value }: CardProps) => {
  return (
    <div className="border rounded-[8px] p-6 space-y-6">
      <div className="flex items-center gap-x-2">
        <Circle fill={theme}>
          <Icon icon={icon} theme={theme} />
        </Circle>
        <p className="font-medium">{label}</p>
      </div>
      <h4 className="text-4xl font-semibold">{value}</h4>
    </div>
  );
};
