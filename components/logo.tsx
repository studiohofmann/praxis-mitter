'use client'


import Image from "next/image";
import logo from "@/public/logo.svg"

export default function Logo() {

    return (
        <div className="">
            <Image
                priority
                src={logo}
                alt="Follow us on Twitter"
                className=""
            />
        </div>
    );
}