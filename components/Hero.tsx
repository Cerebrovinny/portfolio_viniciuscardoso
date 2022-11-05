import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
        const [text, count] = useTypewriter({
            words: [
                "Hi, It's Vinny",
                "Guy-who-loves-Coffee.tsx",
                "<ButLovesToCodeMore />"
            ],
            loop: true,
            delaySpeed: 2000,
        })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://avatars.githubusercontent.com/u/52631834?v=4" alt="" />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7ABBA" />
                </h1>

            </div>
            <div className="flex pt-5 z-30">
                <Link href="#about">
                    <div className="heroButton">About</div>
                </Link>

                <Link href="#experience">
                    <div className="heroButton">Experience</div>
                </Link>

                <Link href="#skills">
                    <div className="heroButton">Skills</div>
                </Link>

                <Link href="#projects">
                    <div className="heroButton">Projects</div>
                </Link>
            </div>
        </div>
    );
}