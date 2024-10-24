"use client";

import React, { FC, memo } from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { ProjectsDataType } from "@/types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LuGithub } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const ProjectsCard: FC<ProjectsDataType> = ({ item }) => {
  const { name, img, link, githubLink } = item;

  return (
    <div className="rounded-lg border-[1px] border-[#0000001d] dark:border-[#ffffff2b] shadow-sm">
      <div className="ps-3 pe-3 pt-3">
        <div className="flex rounded-[10px]">
          <LazyLoadImage
            className="w-full aspect-[16/9] rounded-[10px]"
            alt={name}
            loading="lazy"
            effect="blur"
            src={img}
          />
        </div>
        <div className="flex items-center justify-between py-4 gap-x-2">
          <h4 className="font-medium md:text-[21px] text-[18px] dark:text-white text-black">
            {name}
          </h4>
          <div className="flex items-center gap-x-3">
            <Link
              target="_blank"
              className="flex items-center text-[17px] hover:opacity-70 transition-all h-[36px] sm:h-[42px] sm:text-[20px] gap-x-1 bg-black dark:bg-slate-700 rounded-full text-white p-3"
              href={githubLink}
            >
              <LuGithub />
              <GoArrowUpRight className=" text-[18px] md:text-[20px]" />
            </Link>
            <Link
              target="_blank"
              className="md:text-[16px] dark:text-black dark:bg-white dark:hover:text-black text-[15px] dark:hover:bg-[#ffffffe7] flex items-center md:gap-2 px-3 md:py-2 gap-1 py-[6px] border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all"
              href={link}
            >
              View <IoMdArrowForward className=" text-[18px] md:text-[20px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t-[1px] py-4 px-4 border-t-[#0000001d] dark:border-t-[#ffffff2b]">
        {item.lang.map((langItem, langIdx) => (
          <figure key={langIdx}>
            <img
              key={langIdx}
              className="md:w-10 md:h-10 w-8 h-8 object-cover object-center rounded-full"
              src={langItem.img}
              alt={langItem.title}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default memo(ProjectsCard);
