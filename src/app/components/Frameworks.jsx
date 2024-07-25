"use client";
import React from 'react';
import { AnimatedTooltip } from "./ui/animated-tooltip";

const skills1 = [
    {
        id: 1,
        name: "Flask",
        designation: "Framework",
        image: "/img/flask.jpg",
    },
    {
        id: 2,
        name: "Nextjs",
        designation: "Framework",
        image: "/img/nextjs.jpeg",
    },
    {
        id: 3,
        name: "React",
        designation: "Framework",
        image: "/img/react.jpg",
    },
    {
        id: 4,
        name: "Express",
        designation: "Framework",
        image: "/img/expressjs.png",
    }
];

export default function Skills() {
    return (
        <div className="flex flex-row items-center ml-4 md:ml-8 lg:ml-16 mb-1 w-full p-4 md:p-6 lg:p-8">
            <AnimatedTooltip items={skills1} />
        </div>
    );
}
