"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Paragraph } from "@website/_components/ui/paragraph";

interface AvatarBoxProps {
  name: string;
  imgUrl?: string;
  position: string;
}

export const AvatarBox = ({ name, imgUrl, position }: AvatarBoxProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Avatar className="h-[56px] w-[56px]">
        <AvatarImage src={imgUrl || "https://github.com/shadcn.png"} />
        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start py-2">
        <h3 className="text-lg font-medium">{name}</h3>
        <Paragraph>{position}</Paragraph>
      </div>
    </div>
  );
};
