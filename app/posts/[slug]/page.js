import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetadata";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h1 className="text-3xl font-bold text-slate-800">{post.data.title}</h1>
        <p className=" text-lg text-slate-400">{post.data.date}</p>
      </div>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
