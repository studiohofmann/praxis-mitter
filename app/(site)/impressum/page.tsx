import { client } from "@/sanity/lib/client";
import { IMPRESSUM_QUERY } from "@/sanity/lib/queries";
import { Impressum as Impressumtype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";

async function getData() {
  try {
    const data = await client.fetch<Impressumtype[]>(IMPRESSUM_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Kontakt Data:", error);
    return null;
  }
}

export default async function Impressum() {
  const data = await getData();

  if (!data) return null;

  return (
    <div>
      {/*VERANTWORTUNG TEXT*/}
      <div className='section'>
        <PortableText value={data.verantwortungText || []} />
      </div>

      {/*IMPRESSUM TEXT*/}
      <div className='section bg-como-200'>
        <PortableText value={data.impressumText || []} />
      </div>
    </div>
  );
}
