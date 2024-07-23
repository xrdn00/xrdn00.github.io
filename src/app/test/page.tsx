import { CardDemo1 } from "../components/ui/card1";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
export default function Page() {
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
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-wrap justify-center items-center w-full max-w-screen-lg">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo1 />
          <div className="flex justify-left py-4"><AnimatedTooltip items={build} /></div>
        </div>
      </div>
    </main>
  );
}
