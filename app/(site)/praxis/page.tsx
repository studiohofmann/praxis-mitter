import { client } from "@/sanity/lib/client";
import { PRAXIS_QUERY } from "@/sanity/lib/queries";
import { Praxis as Praxisetype } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Fetch data for metadata
async function getMetaData() {
  try {
    const data = await client.fetch<Praxisetype[]>(PRAXIS_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Praxis Data for metadata:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getMetaData();

  return {
    title: metaData?.menu
      ? `${metaData.menu} | Praxis Mitter`
      : "Praxis | Praxis Mitter",
    description:
      typeof metaData?.text === "string"
        ? metaData.text
        : "Informationen über die Naturheilpraxis Philipp Mitter",
  };
}

// Reuse the same function for component data
async function getData() {
  return getMetaData();
}

export default async function Praxis() {
  const data = await getData();

  if (!data) return null;

  return (
    <div className="section flex flex-col gap-8">
      {/*TEXT */}
      <div className="md:w-2/3">
        <PortableText value={data.text || []} />
      </div>

      {/*BILDER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        {(data.bilder ?? []).map((bild, index) => (
          <div key={index} className="relative w-full aspect-[4/3]">
            <Image
              src={urlFor(bild).url()}
              alt={bild.alt || "Bild"}
              fill
              placeholder="blur"
              blurDataURL={urlFor(bild).width(24).height(24).blur(10).url()}
              quality={100}
              priority
              className="object-cover object-bottom"
              sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
