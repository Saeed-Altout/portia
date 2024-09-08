import { Content, Hero, LatestBlog, Subscribe } from "./_components";

export default function BlogPage({ params }: { params: { blogId: string } }) {
  return (
    <main className="w-full">
      <Hero />
      <Content />
      <LatestBlog />
      <Subscribe />
    </main>
  );
}
