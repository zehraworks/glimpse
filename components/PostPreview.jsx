import Link from "next/link";

export default function PostPreview({ slug, title, subtitle, date }) {
  return (
    <div className="w-full h-24 sm:h-40 bg-slate-50 hover:bg-slate-100 border border-slate-400 p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <Link href={`/posts/${slug}`}>
          <h2 className="text-lg sm:text-xl font-bold text-sky-500 hover:underline ">
            {title}
          </h2>
        </Link>
        <p className="ml-3 text-xs bg-teal-400 opacity-90 font-light text-white p-1 rounded-sm whitespace-nowrap ">
          {date}
        </p>
      </div>
      <p className="text-sm sm:text-base text-slate-800 truncate sm:whitespace-normal">{subtitle}</p>
    </div>
  );
}
