import Link from "next/link";

export default function PostPreview({ slug, title, subtitle, date }) {
  return (
    <div className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-400 p-4 rounded-lg shadow-md">
      <Link href={`/posts/${slug}`}>
        <h2 className="font-bold text-sky-500 hover:underline text-xl">
          {title}
        </h2>
      </Link>
      <p className="italic font-light text-sm">{date}</p>
      <p className="text-base text-slate-800">{subtitle}</p>
    </div>
  );
}
