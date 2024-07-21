"use client";
import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const skills1 = [
    {
        id: 1,
        name: "Python",
        designation: "Programming Language",
        image:
            "/img/python.png",
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
        name: "Typescript",
        designation: "Programming Language",
        image:
            "/img/typescript.png",
    },
    {
        id: 4,
        name: "Java",
        designation: "Programming Language",
        image:
            "/img/java.png",
    },
    {
        id: 5,
        name: "C++",
        designation: "Programming Language",
        image:
            "/img/cpp.png",
    }
];

const skills2 = [
    {
        id: 1,
        name: "PHP",
        designation: "Programming Language",
        image:
            "/img/php.png",
    }

];

export default function Skills() {
    return (
        <>
            <div className="flex flex-row items-center ml-4 md:ml-8 lg:ml-16 mb-1 w-full p-4 md:p-6 lg:p-8">
                <AnimatedTooltip items={skills1} />
            </div>
            <div className='flex flex-row items-center ml-4 md:ml-8 lg:ml-16 -mt-10 w-full p-4 md:p-6 lg:p-8'>
                <AnimatedTooltip items={skills2} />
            </div>
        </>



    )
}
