"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY } from "@/sanity/lib/queries";

interface MenuTypes {
  menu: string;
  slug: {
    current: string;
  };
}

const Menu = () => {
  const [pages, setPages] = useState<MenuTypes[]>([]);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch<MenuTypes[]>(MENU_QUERY);
        setPages(data);
      } catch (error) {
        console.error("Error fetching Menu data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav>
      <div>
        <Link
          href="/"
          className={`!text-sm ${pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
      </div>
      {pages.map((page, index) => (
        <div key={index}>
          <Link
            href={`/${page.slug.current}`}
            className={`!text-sm ${pathname === `/${page.slug.current}` ? "active" : ""}`}
          >
            {page.menu}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
