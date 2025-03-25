import { client } from "@/sanity/lib/client";
import { KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import Contactform from "../components/Contactform";
import Icons from "../components/Icons";
import MapWrapper from "../components/MapWrapper";
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

async function getData() {
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
      <div className="section bg-neutral-200 flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="flex flex-col gap-8 xl:flex-1">
          {/*KONTAKT TEXT*/}
          <div className="md:w-2/3 xl:w-full">
            <PortableText value={data.iconsText || []} />
          </div>
          <div className="md:flex md:gap-8">
            <Icons />
          </div>
          <div className="md:w-2/3 xl:w-full">
            <PortableText value={data.formularText || []} />
          </div>
        </div>
        {/*KONTAKTFORM*/}
        <div className="xl:flex-1">
          <Contactform />
        </div>
      </div>
      {/*ANFAHRT TEXT*/}
      <div className="section bg-sundance-300 flex flex-col gap-8">
        <div className="md:w-2/3">
          <PortableText value={data.anfahrtText || []} />
        </div>
        <div className="-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-8 2xl:px-0 -mb-16">
          <MapWrapper />
        </div>
      </div>
    </div>
  );
}
