"use client";
import { cn } from "../../lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";

const build = [
  {
    id: 1,
    name: "Python",
    designation: "Programming Language",
    image:
      "/img/python.png",
  },
];

export function CardDemo1() {
  const handleClick = () => {
    window.location.href = "https://github.com/xrdn00/YTconverter-APP";
  };
  return (
    <div className="max-w-xs w-full">
      <div onClick={handleClick}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/img/card1p1.png)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/img/card1p1.png)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(/img/card1p2.png)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            YTconverter
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            Convert youtube url into mp4 audio or video and download
          </p>
          <div className='flex flex-row items-center'>
            <AnimatedTooltip items={build} />
          </div>
        </div>
      </div>
    </div>
  );
}
