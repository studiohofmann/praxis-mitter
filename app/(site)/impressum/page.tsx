import { client } from "@/sanity/lib/client";
import { IMPRESSUM_QUERY } from "@/sanity/lib/queries";
import { Impressum as Impressumtype } from "@/sanity.types";
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
  const fullText = data?.verantwortungText
    ? extractTextFromPortableText(data.verantwortungText)
    : "";
  const description =
    fullText.substring(0, 160) + (fullText.length > 160 ? "..." : "");

  return {
    title: `${data?.menu || "Impressum"} | Praxis Mitter`,
    description:
      description || "Impressum und rechtliche Informationen der Praxis Mitter",
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
