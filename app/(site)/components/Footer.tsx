import { client } from "@/sanity/lib/client";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { Footer as Footertype } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import Icons from "./Icons";
import Emr from "@/public/emr.svg";
import Nvs from "@/public/nvs.svg";
import Menu from "./Menu";

async function getData() {
  try {
    const data = await client.fetch<Footertype[]>(FOOTER_QUERY);
    return data[0];
  } catch (error) {
    console.error("Error fetching Kontakt Data:", error);
    return null;
  }
}

export default async function Footer() {
  const data = await getData();
  if (!data) return null;

  return (
    <div className="footersection flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        {/*TERMIN*/}
        <div className="flex flex-col gap-4">
          <h3>{data.terminUeberschrift}</h3>
          <PortableText value={data.terminText || []} />
          {/*CONTACT ICONS*/}
          <Icons />
        </div>

        {/*ANERKENNUNG*/}
        <div className="flex flex-col gap-4">
          <h3>{data.anerkennungUeberschrift}</h3>
          <PortableText value={data.anerkennungText || []} />
          <div className="flex gap-4">
            <a
              href="https://emr.ch/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Emr width="100%" height="36" fill="currentColor" />
            </a>
            <a
              href="https://nvs.swiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Nvs width="100%" height="36" fill="currentColor" />
            </a>
          </div>
        </div>

        {/*MENU*/}
        <div className="flex flex-col gap-4">
          <h3>Menü</h3>
          <Menu />
        </div>

        {/*ANSCHRIFT*/}
        <div className="flex flex-col gap-4">
          <h3>{data.adresseUeberschrift}</h3>
          <a
            href="https://www.openstreetmap.org/way/227581772"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-sm"
          >
            <PortableText value={data.adresse || []} />
          </a>
        </div>
      </div>
      {/*COPYRIGHT*/}
      <div className="flex">
        {new Date().getFullYear()}
        &nbsp;
        <div>
          <PortableText value={data.copyright || []} />
        </div>
      </div>
    </div>
  );
}
