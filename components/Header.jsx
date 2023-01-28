import Image from "next/image";
import Link from "next/link";
import logo from "../public/glimpse.png";

export default function Header() {
  return (
    <div className="container w-full h-32 flex flex-col items-center justify-center bg-slate-900 my-4 p-2 rounded-lg">
      <Link href="/" className="flex flex-col items-center">
        <Image alt="logo" src={logo} height={50} />
        <h1 className="text-2xl text-slate-200">Z's Blog</h1>
      </Link>
      <p className="text-slate-100 italic">
        A{" "}
        <a className="underline decoration-dotted  decoration-sky-500">
          glimpse
        </a>{" "}
        of my CS notes
      </p>
    </div>
  );
}
