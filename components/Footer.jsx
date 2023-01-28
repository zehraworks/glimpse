import Image from "next/image";
import Link from "next/link";
import logo from "../public/github.svg"

export default function Footer() {
  return (
    <div className="w-full h-12 flex justify-center items-center bg-slate-900 text-slate-200 my-2 rounded-lg">
      <p>Developed by</p>
      <Link target="_blank" href="https://github.com/aydinfz">
        <Image className="ml-3" alt="logo" src={logo} height={40} />
      </Link>
    </div>
  );
}
