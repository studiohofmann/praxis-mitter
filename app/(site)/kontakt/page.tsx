import { client } from "@/sanity/lib/client";
import { KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import Contactform from "../components/Contactform";
import Icons from "../components/Icons";
import MapWrapper from "../components/MapWrapper";
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
        (child): child is { _type: "span"; text: string; marks?: string[] } =>
          child._type === "span"
      )
      ?.map((span) => {
        if (span.marks?.includes("strong")) {
          return `<strong>${span.text}</strong>`;
        }
        return span.text;
      }) || [];

  return textSpans.join(" ");
};

// Simplified metadata generation
export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getData();

  // Extract description from portable text (with 160 char limit)
  const fullText = data?.iconsText
    ? extractTextFromPortableText(data.iconsText)
    : "";
  const description =
    fullText.substring(0, 160) + (fullText.length > 160 ? "..." : "");

  return {
    title: `${data?.menu || "Kontakt"} | Praxis Mitter`,
    description:
      description ||
      "Kontaktieren Sie die Praxis Mitter für Terminvereinbarungen und Anfragen",
  };
};

// Fetch data from Sanity
async function getData(): Promise<Kontakttype | null> {
  try {
    const data = await client.fetch<Kontakttype[]>(KONTAKT_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Kontakt Data:", error);
    return null;
  }
}

export default async function Kontakt() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      <div className="section !gap-8 bg-neutral-200 xl:flex-row xl:gap-16">
        <div className="blueLinks flex flex-col gap-4 xl:flex-1">
          {/*KONTAKT TEXT*/}
          <h2>{data.iconsUeberschrift}</h2>
          <PortableText value={data.iconsText || []} />
          <Icons />
        </div>
        {/*KONTAKTFORM*/}
        <div className="flex flex-col gap-4 xl:flex-1">
          <h2>{data.formularUeberschrift}</h2>
          <PortableText value={data.formularText || []} />
          <Contactform />
        </div>
      </div>
      {/*ANFAHRT TEXT*/}
      <div className="section bg-sundance-300">
        <h2>{data.anfahrtUeberschrift}</h2>
        <PortableText value={data.anfahrtText || []} />
        <MapWrapper />
      </div>
    </div>
  );
}
