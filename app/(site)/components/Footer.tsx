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
    <div className='footersection bg-como-800'>
      {/*TERMIN*/}
      <div className='flex flex-col gap-4'>
        <div className='text-center'>
          <PortableText value={data.terminText || []} />
        </div>

        {/*CONTACT ICONS*/}
        <Icons />
      </div>

      <hr className='border-t border-como-300' />

      {/*ANERKENNUNG*/}
      <div className='flex flex-col gap-4'>
        <div className='text-center'>
          <PortableText value={data.anerkennungText || []} />
        </div>
        <div className='flex justify-center gap-8'>
          <a
            href='https://example.com/emr'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full'
          >
            <Emr width='100%' height='100%' fill='currentColor' />
          </a>
          <a
            href='https://example.com/emr'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full'
          >
            <Nvs width='100%' height='100%' fill='currentColor' />
          </a>
        </div>
      </div>

      <hr className='border-t border-como-300' />

      <div className='flex justify-between pb-8'>
        {/*MENU*/}
        <div>
          <b>Menü</b>
          <Menu />
        </div>
        {/*ADRESSE*/}
        <div>
          <PortableText value={data.adresse || []} />
        </div>
      </div>

      {/*COPYRIGHT*/}
      <div className='flex justify-center'>
        {new Date().getFullYear()}
        &nbsp;
        <div>
          <PortableText value={data.copyright || []} />
        </div>
      </div>
    </div>
  );
}
