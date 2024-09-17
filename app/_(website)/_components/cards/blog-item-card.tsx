"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

import { Label } from "@/app/_(website)/_components/ui/label";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";
import { Categories } from "@/app/_(website)/_components/ui/categories";

interface BlogItemCardProps {
  title: string;
  description: string;
  imgUrl: string;
  published: string;
  url: string;
  categories: string[];
}

export const BlogItemCard = ({
  initialData,
  className,
}: {
  initialData: BlogItemCardProps;
} & React.HTMLAttributes<HTMLElement>) => {
  const { title, description, imgUrl, published, url, categories } =
    initialData;

  return (
    <div className={cn("flex flex-col lg:flex-row gap-y-8", className)}>
      <Image
        src={imgUrl}
        alt={`Image for the blog post titled "${title}"`}
        className="max-h-[240px] w-full h-full object-cover flex-1"
        width={1000}
        height={1000}
      />
      <div className="space-y-6 lg:px-6 lg:max-w-[250px]">
        <div className="space-y-3">
          <Label label={published} />
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Link
              href={url}
              aria-label={`Read more about ${title}`}
              className="block lg:hidden"
            >
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </div>
          <Paragraph>{description}</Paragraph>
        </div>
        <Categories items={categories} />
      </div>
    </div>
  );
};
