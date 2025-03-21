import { client } from "@/sanity/lib/client";
import { IMPRESSUM_QUERY } from "@/sanity/lib/queries";
import { Impressum as Impressumtype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Fetch data for metadata
async function getMetaData() {
  try {
    const data = await client.fetch<Impressumtype[]>(IMPRESSUM_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Impressum Data for metadata:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getMetaData();

  return {
    title: metaData?.menu
      ? `${metaData.menu} | Praxis Mitter`
      : "Impressum | Praxis Mitter",
    description:
      typeof metaData?.verantwortungText === "string"
        ? metaData.verantwortungText
        : "Impressum und rechtliche Informationen der Praxis Mitter",
  };
}

// Reuse the same function for component data
async function getData() {
  return getMetaData();
}

export default async function Impressum() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      {/*VERANTWORTUNG TEXT*/}
      <div className="section">
        <PortableText value={data.verantwortungText || []} />
      </div>

      {/*IMPRESSUM TEXT*/}
      <div className="section bg-sundance-300">
        <PortableText value={data.impressumText || []} />
      </div>
    </div>
  );
}
