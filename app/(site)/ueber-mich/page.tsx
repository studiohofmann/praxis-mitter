import { client } from "@/sanity/lib/client";
import { UEBERMICH_QUERY } from "@/sanity/lib/queries";
import { UeberMich as Uebermichtype } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Define the type for Portable Text blocks
type PortableTextBlock = {
  _type: "block";
  children?: Array<{
    _type: "span";
    text?: string;
  }>;
};

// Helper function to extract plain text from Portable Text
const extractTextFromPortableText = (
  portableText: PortableTextBlock[] = []
) => {
  const firstBlock = portableText.find((block) => block._type === "block");
  const textSpans: string[] =
    firstBlock?.children
      ?.filter(
        (child): child is { _type: "span"; text: string } =>
          child._type === "span"
      )
      ?.map((span) => span.text) || [];

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
    title: `${data?.menu || "Über mich"} | Praxis Mitter`,
    description:
      description || "Informationen über die Person hinter der Praxis Mitter",
  };
};

// Fetch data from Sanity
async function getData(): Promise<Uebermichtype | null> {
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
    <div className="section">
      {/*IMAGE*/}
      <div className="relative w-full h-[50vh]">
        <Image
          src={data.bild ? urlFor(data.bild).url() : ""}
          alt={data.bild?.alt || "Startbild"}
          fill
          placeholder="blur"
          blurDataURL={
            data.bild
              ? urlFor(data.bild).width(24).height(24).blur(10).url()
              : ""
          }
          quality={100}
          priority
          className="object-cover object-center 2xl:px-64"
          sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 100vw,
                           100vw"
        />
      </div>

      {/*TEXT*/}

      <h2>{data.ueberschrift}</h2>
      <PortableText value={data.text || []} />
    </div>
  );
}
