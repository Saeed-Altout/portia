import * as React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const HeadingSection = () => {
  return (
    <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
      <h1 className="font-medium text-3xl">Welcome back, Jafar</h1>
      <div className="flex items-center justify-center gap-3">
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" /> Activate Proxies
        </Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" /> Add Fund
        </Button>
      </div>
    </div>
  );
};
