import React from "react";
import {
  MailFilled,
  PhoneFilled,
  WhatsAppOutlined,
  InstagramFilled,
} from "@ant-design/icons";
import { client } from "@/sanity/lib/client";
import { KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";

async function Icons() {
  let data: Kontakttype | null = null;
  try {
    const result = await client.fetch<Kontakttype[]>(KONTAKT_QUERY);
    data = result[0];
  } catch (error) {
    console.error("Error fetching Contact data:", error);
    return null;
  }

  if (!data) return null;

  return (
    <div className='flex gap-8 justify-center'>
      {data.email && (
        <a href={`mailto:${data.email}`} aria-label='Email'>
          <MailFilled className='icon' />
        </a>
      )}

      {data.telefonnummer && (
        <a href={`tel:${data.telefonnummer}`} aria-label='Telefon'>
          <PhoneFilled className='icon' />
        </a>
      )}
      {data.telefonnummer && (
        <a
          href={`https://wa.me/${data.telefonnummer.replace(/\s+/g, "")}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <WhatsAppOutlined className='icon' />
        </a>
      )}

      {data.instagram && (
        <a
          href={`https://instagram.com/${data.instagram.replace("@", "")}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <InstagramFilled className='icon' />
        </a>
      )}
    </div>
  );
}

export default Icons;
