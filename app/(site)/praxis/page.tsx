import { client } from "@/sanity/lib/client";
import { PRAXIS_QUERY } from "@/sanity/lib/queries";
import { Praxis as Praxisetype } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getData() {
  try {
    const data = await client.fetch<Praxisetype[]>(PRAXIS_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Praxis Data:", error);
    return null;
  }
}

export default async function Praxis() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      {/*TEXT */}
      <div className='section'>
        <PortableText value={data.text || []} />
      </div>

      {/*BILDER */}
      <div className='section bg-como-200 grid grid-cols-1 gap-4'>
        {(data.bilder ?? []).map((bild, index) => (
          <div key={index} className='relative w-full aspect-[4/3]'>
            <Image
              src={urlFor(bild).url()}
              alt={bild.alt || "Bild"}
              fill
              placeholder='blur'
              blurDataURL={urlFor(bild).width(24).height(24).blur(10).url()}
              quality={100}
              priority
              className='object-cover object-bottom'
              sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
