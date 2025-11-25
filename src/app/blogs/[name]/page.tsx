import { blogs } from "@/constants/blog";
// import Image from "next/image";

export default function BlogDetail({ params }: { params: { name: string } }) {
  const blog = blogs.find((b) => b.name === params.name);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-4xl ml-4 px-10 py-25">

      <div
        className="prose prose-lg text-left max-w-none"  
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
