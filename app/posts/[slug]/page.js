import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

export default function PostPage({ params }) {
  const slug = params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <h1>PostPage {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
}
