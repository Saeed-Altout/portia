"use client";

import * as React from "react";

import { blogsData } from "@/app/(root)/constants";

import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { Heading } from "@/app/(root)/_components/ui/heading";
import { BlogCard } from "@/app/(root)/_components/cards/blog-card";

export const LatestBlog = () => {
  return (
    <Section>
      <Container className="gap-y-16">
        <Heading
          label="Our blog"
          title="Latest blog posts"
          description="Tool and strategies modern teams need to help their companies grow."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogsData.map((blog, index) => (
            <React.Fragment key={index}>
              {blog.isFavorite && <BlogCard initialData={blog} />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Section>
  );
};
