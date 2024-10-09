import { LucideIcon } from "lucide-react";
import { Circle, Icon } from "@/components/dashboard/circle-icon";

interface ProxiesCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  fill: any;
  theme: any;
}

export const ProxiesCard = ({
  initialData,
}: {
  initialData: ProxiesCardProps;
}) => {
  const { icon, title, content, fill, theme } = initialData;
  return (
    <div className="border rounded-lg">
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-start gap-x-2">
          <Circle fill={fill}>
            <Icon icon={icon} theme={theme} />
          </Circle>
          <p className="font-medium">{title}</p>
        </div>
        <h4 className="text-4xl font-semibold">{content}</h4>
      </div>
    </div>
  );
};
