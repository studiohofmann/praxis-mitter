import { client } from "@/sanity/lib/client";
import { KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import Contactform from "../components/Contactform";
import Icons from "../components/Icons";

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
      <div className='section flex flex-col gap-8'>
        {/*KONTAKT TEXT*/}
        <div>
          <PortableText value={data.iconsText || []} />
        </div>
        <Icons />
        <div>
          <PortableText value={data.formularText || []} />
        </div>
        <Contactform />
      </div>

      {/*ANFAHRT TEXT*/}
      <div className='section bg-neutral-200'>
        <PortableText value={data.anfahrtText || []} />
      </div>
    </div>
  );
}
