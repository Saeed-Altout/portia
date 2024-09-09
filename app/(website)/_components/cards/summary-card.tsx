"use client";

import * as React from "react";

import { Paragraph } from "@website/_components/ui/paragraph";
import { Categories } from "@website/_components/ui/categories";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SummaryCardProps {
  title: string;
  author: string;
  position: string;
  categories: any[];
}

export const SummaryCard = ({
  title,
  author,
  position,
  categories,
  children,
}: SummaryCardProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="space-y-12">
      <div className="p-0 lg:p-8 space-y-6 bg-transparent lg:bg-[#F5F5FA] rounded-[16px]">
        <h2 className="text-2xl lg:text-3xl font-semibold">{title}</h2>
        <div className="space-y-6">{children}</div>
      </div>
      <div className="flex items-center justify-between border-t pt-6">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="h-[56px] w-[56px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start py-2">
            <Paragraph size="lg" className="font-medium text-black-primary">
              {author}
            </Paragraph>
            <Paragraph>{position}</Paragraph>
          </div>
        </div>
        <Categories items={categories} />
      </div>
    </div>
  );
};
