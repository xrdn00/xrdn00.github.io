"use client";
import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const skills1 = [
    {
        id: 1,
        name: "Git",
        designation: "Source Code Management",
        image:
            "/img/git.jpg",
    },
    {
        id: 2,
        name: "Github",
        designation: "Version Control",
        image:
            "/img/github.png",
    },
    {
        id: 3,
        name: "Nodejs",
        designation: "Runtime Environment",
        image:
            "/img/nodejs.jpg",
    }
];

export default function Skills() {
    return (

        <div className="flex flex-row items-center ml-4 md:ml-8 lg:ml-16 mb-1 w-full p-4 md:p-6 lg:p-8">
            <AnimatedTooltip items={skills1} />
        </div>


    )
}
