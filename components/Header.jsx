import Image from "next/image";
import Link from "next/link";
import logo from "../public/glimpse.png";

export default function Header() {
  return (
    <div className="container w-full h-28 sm:h-40 flex flex-col items-center justify-center bg-slate-900 my-4 rounded-lg">
      <Link href="/" className="flex flex-col items-center">
        <Image alt="logo" src={logo} className="h-10 w-10 sm:h-16 sm:w-16" />
        <h1 className="text-xl sm:text-3xl font-bold text-slate-200 sm:mb-2">Z's Blog</h1>
      </Link>
      <div className="flex justify-center items-baseline">
        <p>✌</p>
        <p className="text-slate-100 text-xs sm:text-base italic mx-2 sm:mx-3">
          A{" "}
          <a className="underline decoration-dotted  decoration-sky-500">
            glimpse
          </a>{" "}
          of my CS notes
        </p>
        <p>💻</p>
      </div>
    </div>
  );
}
