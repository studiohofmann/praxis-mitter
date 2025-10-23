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
    <div className="flex flex-col gap-2 items-start">
      {data.email && (
        <a
          href={`mailto:${data.email}`}
          aria-label="Email"
          className="inline-flex items-center gap-2"
        >
          <MailFilled className="icon" />
          <div>-</div>
          <div>Email</div>
        </a>
      )}

      {data.telefonnummer && (
        <a
          href={`tel:${data.telefonnummer}`}
          aria-label="Telefon"
          className="inline-flex items-center gap-2"
        >
          <PhoneFilled className="icon" />
          <div>-</div>
          <div>Telefon</div>
        </a>
      )}
      {data.telefonnummer && (
        <a
          href={`https://wa.me/${
            data.telefonnummer
              .replace(/\s+/g, "") // Remove all whitespace
              .replace(/^0/, "41") // Replace leading 0 with country code (41 for Switzerland)
              .replace(/^\+/, "") // Remove any leading + sign
          }`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center gap-2"
        >
          <WhatsAppOutlined className="icon" />
          <div>-</div>
          <div>WhatsApp</div>
        </a>
      )}

      {data.instagram && (
        <a
          href={`https://instagram.com/${data.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center gap-2"
        >
          <InstagramFilled className="icon" />
          <div>-</div>
          <div>Instagram</div>
        </a>
      )}
    </div>
  );
}

export default Icons;
