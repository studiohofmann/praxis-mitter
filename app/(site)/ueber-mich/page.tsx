import { client } from "@/sanity/lib/client";
import { UEBERMICH_QUERY } from "@/sanity/lib/queries";
import { UeberMich as Uebermichtype } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getData() {
  try {
    const data = await client.fetch<Uebermichtype[]>(UEBERMICH_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Über mich Data:", error);
    return null;
  }
}

export const revalidate = 0;

export default async function UeberMich() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      {/*IMAGE*/}
      <div className='relative w-full h-[50vh] aspect-[4/3]'>
        <Image
          src={data.bild ? urlFor(data.bild).url() : ""}
          alt={data.bild?.alt || "Startbild"}
          fill
          placeholder='blur'
          blurDataURL={
            data.bild
              ? urlFor(data.bild).width(24).height(24).blur(10).url()
              : ""
          }
          quality={100}
          priority
          className='object-cover object-bottom'
          sizes='(max-width: 768px) 100vw,
                           (max-width: 1200px) 100vw,
                           100vw'
        />
      </div>

      {/*TEXT*/}
      <div className='section bg-stone-200'>
        <PortableText value={data.text || []} />
      </div>
    </div>
  );
}
