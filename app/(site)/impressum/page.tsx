import { client } from "@/sanity/lib/client";
import { IMPRESSUM_QUERY } from "@/sanity/lib/queries";
import { Impressum as Impressumtype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

export const generateMetadata: () => Promise<Metadata> = async () => {
  // You can fetch data here if needed for dynamic titles
  return {
    title: "Impressum | Praxis Mitter",
  };
};

async function getData() {
  try {
    const data = await client.fetch<Impressumtype[]>(IMPRESSUM_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Impressum Data:", error);
    return null;
  }
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
