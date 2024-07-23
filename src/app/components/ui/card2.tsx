"use client";
import { cn } from "../../lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";

const build = [
  {
    id: 1,
    name: "PHP",
    designation: "Programming Language",
    image:
      "/img/php.png",
  },
  {
    id: 2,
    name: "Javascript",
    designation: "Programming Language",
    image:
      "/img/javascript.png",
  },
  {
    id: 3,
    name: "HTML",
    designation: "Hyper Text Markup Language",
    image:
      "/img/html.png",
  },
  {
    id: 4,
    name: "CSS",
    designation: "Cascading Style Sheets",
    image:
      "/img/css.png",
  },
  {
    id: 5,
    name: "Nodejs",
    designation: "Runtime Environment",
    image:
      "/img/nodejs.jpg",
  },
  {
    id: 6,
    name: "Expressjs",
    designation: "Web Framework",
    image:
      "/img/express.png",
  }
];

export function CardDemo2() {
  const handleClick = () => {
    window.location.href = "https://github.com/xrdn00/shield-ed-pub";
  };

  return (
    <div className="max-w-xs w-full">
      <div onClick={handleClick}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/img/card2p1.png)] bg-cover bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/img/card2p2.png)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(/img/card2p2.png)] bg-cover bg-center",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Shield-Ed+: Safety & Prevention App
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            Protecting Your School Community
          </p>
        </div>
      </div>
    </div>
  );
}
