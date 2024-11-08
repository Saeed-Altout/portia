import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FlagBoxProps {
  name: string;
  flagUrl: string;
  users: string;
}

export const FlagBox = ({ name, flagUrl, users }: FlagBoxProps) => {
  return (
    <div className="flex items-center justify-start gap-x-6">
      <Avatar className="h-20 w-20">
        <AvatarImage src={flagUrl} />
        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-medium text-lg capitalize">{name}</h3>
        <p className="text">{users} IPs</p>
      </div>
    </div>
  );
};
