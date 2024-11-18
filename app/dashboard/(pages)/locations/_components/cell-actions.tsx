import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { proxyStore } from "@/stores/proxy-store";
import { useRouter, useSearchParams } from "next/navigation";

interface CellActionsProps {
  data: ListProxy;
}

export const CellActions = ({ data }: CellActionsProps) => {
  const { setProxy, onOpen } = proxyStore();
  const router = useRouter();
  const params = useSearchParams();
  const pathname = params.get("callback");

  const onSelectProvider = () => {
    setProxy(data);
    onOpen();
    router.push(pathname ?? "/dashboard");
  };

  return (
    <div className="w-fit ml-auto">
      <Button
        className={cn("bg-[#3F41BF]", data.is_available && "px-5")}
        size="sm"
        disabled={!data.is_available}
        onClick={onSelectProvider}
      >
        {!data.is_available && <Info className="h-3 w-3 mr-1 mb-0.5" />}
        Continue
      </Button>
    </div>
  );
};
