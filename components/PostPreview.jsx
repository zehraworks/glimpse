import Link from "next/link";

export default function PostPreview({ slug, title, subtitle, date }) {
  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{subtitle}</p>
      <p>{date}</p>
    </div>
  );
}
