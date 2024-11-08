import { Content, Hero, LatestBlog, Subscribe } from "./_components";
import { blogsData } from "@/app/(root)/constants";

export default function BlogPage({ params }: { params: { blogId: string } }) {
  const blog = blogsData.filter((item) => item.id === params.blogId && item);

  return (
    <main className="w-full">
      <Hero data={blog[0]} />
      <Content data={blog[0]} />
      <LatestBlog />
      <Subscribe />
    </main>
  );
}
