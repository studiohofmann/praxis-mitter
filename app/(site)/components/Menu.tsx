"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
    <nav className='flex flex-col md:flex-row md:space-x-4'>
      {pages.map((page, index) => (
        <div key={index}>
          <Link href={`/${page.slug.current}`}>{page.menu}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
