import React from "react";
import Header from "@/components/Header/Header";
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Stack = dynamic(() => import("@/components/Stack/Stack"));
import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
import Heading from "@/common/Heading/Heading";
import { YoutubeVideos } from "@/data/data";

const page = () => {
  return (
    <div className="container px-4 md:px-5">
      <Header />
      <main>
        <Hero />
        <div className="mt-20">
          <Heading title="Latest YouTube Videos" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7 md:mt-10">
            {YoutubeVideos.map((el, idx) => (
              <iframe
                className=" aspect-[7/8] w-full bg-red-50 rounded-lg"
                key={idx}
                src={el.src}
                title={el.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            ))}
          </div>
        </div>
        <Stack />
        <Projects />
      </main>
    </div>
  );
};

export default page;
