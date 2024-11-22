import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GooglePage() {
  return (
    <div className="h-full flex justify-center items-center">
      <Button variant="outline">
        {/* Checking your information */}
        {/* Verify information */}
        Redirecting to dashboard
        <Loader className="animate-spin ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
