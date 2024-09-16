import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCheck, Plus, Zap } from "lucide-react";
import Link from "next/link";

export const OverviewClient = () => {
  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg">
          <div className="p-6 flex justify-start items-start flex-col gap-y-6">
            <div className="flex items-center justify-start gap-x-2">
              <span className="w-[48px] h-[48px] bg-[#B5B6F7] border-[#D4D4FF] border-[8px] flex items-center justify-center rounded-full">
                <Zap className="w-5 h-5 text-primary" />
              </span>
              <p className="font-medium">Paid Proxies</p>
            </div>
            <h3 className="text-4xl font-semibold">12 Proxies</h3>
          </div>
          <Separator />
          <div className="flex items-center justify-end py-2 px-6">
            <Button variant="ghost" asChild>
              <Link href="/my-proxies" className="text-primary capitalize">
                View all proxies
              </Link>
            </Button>
          </div>
        </div>
        <div className="border rounded-lg">
          <div className="p-6 flex justify-start items-start flex-col gap-y-6">
            <div className="flex items-center justify-start gap-x-2">
              <span className="w-[48px] h-[48px] bg-[#B5F7F6] border-[#D4FFFE] border-[8px] flex items-center justify-center rounded-full">
                <Zap className="w-5 h-5 text-[#11807E]" />
              </span>
              <p className="font-medium">User Balance</p>
            </div>
            <h3 className="text-4xl font-semibold">1000$</h3>
          </div>
          <Separator />
          <div className="flex items-center justify-end py-2 px-6">
            <Button variant="ghost" asChild>
              <Link href="/my-proxies" className="text-primary capitalize">
                View all deposit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
