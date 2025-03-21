"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname(); // Get current path
  const [pages, setPages] = useState<MenuTypes[]>([]);
  const [kontaktData, setKontaktData] = useState<Kontakttype | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollbarWidthRef = useRef(0);

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

  useEffect(() => {
    // Calculate scrollbar width once on mount
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    scrollbarWidthRef.current = windowWidth - documentWidth;
  }, []);

  // Control body scroll when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Disable scrolling when menu is open and compensate for scrollbar width
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidthRef.current}px`;
    } else {
      // Re-enable scrolling when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";

      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-como-800 text-como-300 2xl:mx-64">
      {/* Fixed Navigation Bar that always stays visible */}
      <div className="flex items-center justify-between p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-8 relative z-30">
        {/*LOGO*/}
        <Link
          onClick={closeMenu}
          href={`/`}
          className={`w-16 ${pathname === "/" ? "active" : ""}`}
        >
          <Logo width="100%" height="100%" fill="currentColor" />
        </Link>

        <div className="flex items-center gap-8">
          {/*TERMIN BUCHEN*/}
          {kontaktData?.telefonnummer && (
            <a
              href={`tel:${kontaktData.telefonnummer}`}
              aria-label="Telefon"
              className="text-base tracking-wide"
            >
              {kontaktData?.navigationText || "Termin buchen:"}&nbsp;
              {kontaktData.telefonnummer}
            </a>
          )}
          {/* Desktop horizontal menu - only visible on md and up */}
          <div className="hidden md:flex items-center justify-center gap-4">
            {pages.map((page, index) => (
              <Link
                key={index}
                href={`/${page.slug.current}`}
                className={`md:text-base md:tracking-wide md:font-bold ${
                  pathname === `/${page.slug.current}` ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                {page.menu}
              </Link>
            ))}
          </div>
          {/*MENU ICON - only visible on mobile*/}
          <div
            className="block flex md:hidden focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <CloseOutlined className="icon hover:text-como-200 @apply transition-all duration-200 ease-in-out;" />
            ) : (
              <MenuOutlined className="icon hover:text-como-200 @apply transition-all duration-200 ease-in-out;" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu with soft fade transition */}
      <div
        className={`fixed inset-0 bg-como-800 flex flex-col items-center justify-center gap-8 pt-20 z-20 md:hidden
          transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {pages.map((page, index) => (
          <div key={index} className="w-full px-4 text-center">
            <Link
              href={`/${page.slug.current}`}
              className={`w-full block ${
                pathname === `/${page.slug.current}` ? "active" : ""
              }`}
            >
              <button onClick={closeMenu} className="w-full">
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
