"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-8 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`flex-center p-medium-16 whitespace-nowrap relative px-1 ${
              isActive ? 'text-[#FA776C]' : ''
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
            {isActive && (
              <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[#FA776C]"></span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;