import { blogs } from "@/constants/blog";
// import Image from "next/image";

export default function BlogDetail({ params }: { params: { name: string } }) {
  const blog = blogs.find((b) => b.name === params.name);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-4xl ml-4 px-10 py-25">

      {/* <h1 className="text-4xl font-bold mb-6 text-left">{blog.title}</h1>

      <Image
        src={blog.thumbnail}
        alt={blog.title}
        className="rounded-xl w-full mb-8"
        width={800} 
        height={600}
      /> */}

      <div
        className="prose prose-lg text-left max-w-none"  
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
