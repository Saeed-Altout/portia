import * as React from "react";

import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { BlogCard } from "@/app/(root)/_components/cards/blog-card";
import { BlogItemCard } from "@/app/(root)/_components/cards/blog-item-card";

import { blogsData } from "@/app/(root)/constants";

export const RecentBlogs = () => {
  return (
    <Section>
      <Container className="gap-y-8">
        <h3 className="text-xl md:text-2xl font-semibold">Recent blog posts</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="basis-1/2">
            {blogsData.map((blog, index) => (
              <React.Fragment key={index}>
                {blog.isFavorite && blog.order === 1 && (
                  <BlogCard initialData={blog} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col gap-8">
            {blogsData.map((blog, index) => (
              <React.Fragment key={index}>
                {blog.isFavorite && blog.order !== 1 && (
                  <BlogItemCard initialData={blog} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
