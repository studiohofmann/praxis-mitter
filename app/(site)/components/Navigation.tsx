"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY, KONTAKT_QUERY } from "@/sanity/lib/queries";
import { Kontakt as Kontakttype } from "@/sanity.types";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Logo from "@/public/logo.svg";

interface MenuTypes {
  menu: string;
  slug: {
    current: string;
  };
}

const Navigation = () => {
  const [pages, setPages] = useState<MenuTypes[]>([]);
  const [kontaktData, setKontaktData] = useState<Kontakttype | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch menu data
        const menuData = await client.fetch<MenuTypes[]>(MENU_QUERY);
        setPages(menuData);

        // Fetch kontakt data
        const kontaktResult = await client.fetch<Kontakttype[]>(KONTAKT_QUERY);
        if (kontaktResult && kontaktResult.length > 0) {
          setKontaktData(kontaktResult[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Control body scroll when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      // Disable scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='relative bg-como-800 text-como-300'>
      {/* Fixed Navigation Bar that always stays visible */}
      <div className='flex items-center justify-between p-4 relative z-30'>
        {/*LOGO*/}
        <Link onClick={closeMenu} href={`/`} className='w-16'>
          <Logo width='100%' height='100%' fill='currentColor' />
        </Link>
        <div className='flex items-center gap-8'>

          {/*TERMIN BUCHEN*/}
          {kontaktData?.telefonnummer && (
            <a
              href={`tel:${kontaktData.telefonnummer}`}
              aria-label='Telefon'
              className='text-base tracking-wide'
            >
              {kontaktData?.navigationText || "Termin buchen: +41762228023"}
              &nbsp;
              {kontaktData.telefonnummer}
            </a>
          )}
          {/*MENU ICON*/}
          <div
            className='block md:hidden focus:outline-none cursor-pointer'
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <CloseOutlined className='icon' />
            ) : (
              <MenuOutlined className='icon' />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen
            ? "fixed inset-0 bg-como-800 flex flex-col items-center justify-center gap-8 pt-20 z-20"
            : "hidden"
        } md:block md:flex md:items-center md:justify-between`}
      >
        {pages.map((page, index) => (
          <div key={index} className='w-full px-4 text-center'>
            <Link href={`/${page.slug.current}`} className='w-full block'>
              <button onClick={closeMenu} className='w-full py-3 text-xl'>
                {page.menu}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
