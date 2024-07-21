"use client";
import { cn } from "../../lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";

const build = [
  {
    id: 1,
    name: "Javascript",
    designation: "Programming Language",
    image:
      "/img/javascript.png",
  },
  {
    id: 2,
    name: "Typescript",
    designation: "Programming Language",
    image:
      "/img/typescript.png",
  },
  {
    id: 3,
    name: "Nextjs",
    designation: "Web Framework",
    image:
      "/img/nextjs.jpeg",
  },
  {
    id: 4,
    name: "React",
    designation: "Web Framework",
    image:
      "/img/react.jpg",
  },
  {
    id: 5,
    name: "Tailwind",
    designation: "Tailwind CSS",
    image:
      "/img/tailwind.png",
  },
  {
    id: 6,
    name: "Nodejs",
    designation: "Runtime Environment",
    image:
      "/img/nodejs.jpg",
  }
];


export function CardDemo3() {
  const handleClick = () => {
    window.location.href = "https://github.com/xrdn00/xrdn00.github.io";
  };

  return (
    <div className="max-w-xs w-full">
      <div onClick={handleClick}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/img/card3p1.png)] bg-cover bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/img/card3p2.png)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(/img/card3p2.png)] bg-cover bg-center",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            My First React Website
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            My portfolio website created using Nextjs and aceternity ui
          </p>
          <div className='flex flex-row items-center'>
            <AnimatedTooltip items={build} />
          </div>
        </div>
      </div>
    </div>
  );
}
