import { client } from "@/sanity/lib/client";
import { KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import Contactform from "../components/Contactform";
import Icons from "../components/Icons";
import MapWrapper from "../components/MapWrapper";
import { Metadata } from "next";

// Fetch data for metadata
async function getMetaData() {
  try {
    const data = await client.fetch<Kontakttype[]>(KONTAKT_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Kontakt Data for metadata:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getMetaData();

  return {
    title: metaData?.menu
      ? `${metaData.menu} | Praxis Mitter`
      : "Kontakt | Praxis Mitter",
    description:
      typeof metaData?.iconsText === "string"
        ? metaData.iconsText
        : "Kontaktieren Sie die Praxis Mitter",
  };
}

// Reuse the same function for component data
async function getData() {
  return getMetaData();
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
