import LogoNorway400 from "@/public/logo-norway400.svg"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className='w-full border-none p-0'>
            <LogoNorway400 className="h-11 text-norway600 hover:text-norway800 duration-300 ease-in-out" />
        </Link>
    );
}