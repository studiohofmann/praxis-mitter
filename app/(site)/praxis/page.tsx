import { client } from "@/sanity/lib/client";
import { PRAXIS_QUERY } from "@/sanity/lib/queries";
import { Praxis as Praxisetype } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Helper function to extract plain text from Portable Text
const extractTextFromPortableText = (portableText: any[] = []) => {
  const firstBlock = portableText.find((block) => block._type === "block");
  const textSpans: string[] =
    firstBlock?.children
      ?.filter(
        (child: { _type: string }): child is { _type: "span"; text: string } =>
          child._type === "span"
      )
      ?.map((span: { text: string }) => span.text) || [];

  return textSpans.join(" ");
};

// Simplified metadata generation
export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getData();

  // Extract description from portable text (with 160 char limit)
  const fullText = data?.text ? extractTextFromPortableText(data.text) : "";
  const description =
    fullText.substring(0, 160) + (fullText.length > 160 ? "..." : "");

  return {
    title: `${data?.menu || "Praxis"} | Praxis Mitter`,
    description: description || "Informationen zur Praxis Mitter",
  };
};

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
