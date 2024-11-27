"use client";

import * as React from "react";

import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";
import { BlogCard } from "@/components/root/cards/blog-card";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";

import { blogsData } from "@/app/(root)/constants";

const fetchPaginatedBlogs = (page = 1, limit = 6) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalBlogs = blogsData.length;
      const totalPages = Math.ceil(totalBlogs / limit);
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = blogsData.slice(start, end);

      resolve({
        data,
        total: totalBlogs,
        totalPages,
        currentPage: page,
      });
    }, 500);
  });
};

export const AllBlogs = () => {
  const [blogs, setBlogs] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  React.useEffect(() => {
    fetchPaginatedBlogs(currentPage).then(({ data, totalPages }: any) => {
      setBlogs(data);
      setTotalPages(totalPages);
    });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Section>
      <Container className="gap-y-8">
        <h3 className="text-xl md:text-2xl font-semibold">All blog posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {blogs.map((blog, index) => (
            <React.Fragment key={index}>{!blog.isFavorite && <BlogCard initialData={blog} />}</React.Fragment>
          ))}
        </div>
        <Separator />
        <Pagination className="w-full">
          <PaginationContent className="w-full flex items-center justify-between">
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} />
            </PaginationItem>
            <div className="flex items-center justify-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? "font-semibold" : ""}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 5 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
            </div>
            <div>
              <PaginationItem>
                <PaginationNext href="#" onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} />
              </PaginationItem>
            </div>
          </PaginationContent>
        </Pagination>
      </Container>
    </Section>
  );
};
