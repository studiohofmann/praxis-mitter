import { client } from "@/sanity/lib/client";
import { LANDINGPAGE_QUERY } from "@/sanity/lib/queries";
import { Landingpage as Landingpagetype } from "@/sanity.types";
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

// Simplified metadata generation for landing page
export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getData();

  // Extract description from portable text (with 160 char limit)
  const fullText = data?.willkommenText
    ? extractTextFromPortableText(data.willkommenText)
    : "";
  const description =
    fullText.substring(0, 160) + (fullText.length > 160 ? "..." : "");

  return {
    title: "Praxis Mitter", // Simple title for home page
    description:
      description || "Naturheilpraxis für eine gesunde Lebensführung",
    openGraph: {
      images: data?.bild
        ? [urlFor(data.bild).width(1200).height(630).url()]
        : [],
    },
  };
};

// Fetch data from Sanity
async function getData(): Promise<Landingpagetype | null> {
  try {
    const data = await client.fetch<Landingpagetype[]>(LANDINGPAGE_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Landingpage Data:", error);
    return null;
  }
}

export const revalidate = 0;

export default async function Home() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      {/*HEROIMAGE*/}
      <div className="relative w-full h-[25vh] md:h-[33vh] xl:h-[50vh] aspect-[4/3]">
        <div className="relative flex items-center justify-center h-full w-full">
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
          <div className="absolute inset-0 bg-darkSlateGray opacity-30" />
        </div>
      </div>
      {/*WILLKOMMEN*/}
      <div className="section">
        <PortableText value={data.willkommenText || []} />
      </div>
      {/*LEISTUNGEN*/}
      <div className="section bg-sundance-300 flex flex-col gap-8">
        <div>
          <PortableText
            value={data.leistungenText || []}
            components={{
              list: {
                bullet: ({ children }) => (
                  <div className="list-disc">{children}</div>
                ),
              },
              listItem: {
                bullet: ({ children }) => <li>{children}</li>,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
