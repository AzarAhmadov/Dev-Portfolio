"use client";

import React from "react";
import { NavLinks } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "@/components/Theme/Theme";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <section className="fixed left-[50%] translate-x-[-50%] bottom-10">
      <nav className="flex justify-center gap-3 bg-[#FBFBFC]/70 backdrop-blur-lg md:px-3 py-2 px-2 border-[1px] border-[#00000014] rounded-full">
        {NavLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <Link
              className={`
                ${
                  pathName === link.href
                    ? "bg-gradient-to-l from-zinc-900 to-stone-700 text-white"
                    : "bg-[#fff]"
                }
                transition-all shadow-md rounded-full w-[50px] h-[50px] flex items-center justify-center shrink-0
                
                `}
              key={index}
              href={link.href}
              aria-label={link.ariaLabel}
            >
              <Icon className="text-[25px]" />
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Navigation;
