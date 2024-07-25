import { CardDemo1 } from "../components/ui/card1";
import { CardDemo2 } from "../components/ui/card2";
import { CardDemo3 } from "../components/ui/card3";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

export default function Page() {
  const build1 = [
    {
      id: 1,
      name: "Python",
      designation: "Programming Language",
      image:
        "/img/python.png",
    }
  ];
  const build2 = [
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
  const build3 = [
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
          <h1 className="flex justify-left ml-2 py-2 text-white">Build</h1>
          <div className="flex justify-left py-1"><AnimatedTooltip items={build1} /></div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo2 />
          <h1 className="flex justify-left ml-2 py-2 text-white">Build</h1>
          <div className="flex justify-left py-1"><AnimatedTooltip items={build2} /></div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo3 />
          <h1 className="flex justify-left ml-2 py-2 text-white">Build</h1>
          <div className="flex justify-left py-1"><AnimatedTooltip items={build3} /></div>
        </div>
        

      </div>
    </main>
  );
}
