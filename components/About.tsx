import React from 'react';
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                src="https://avatars.githubusercontent.com/u/52631834?s=400&u=b243c4a839472b74215c7595d15e9a8b15f894ef&v=4"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>
                    {" "}background</h4>
                <p className="text-base">
                    I'm a Software Engineer based in Sao Paulo, Brazil. I'm currently contributing to
                    many open source projects and working on my own projects. I'm a huge fan of Software Architecture and
                    I'm always trying to learn more about it.
                </p>
            </div>
        </motion.div>
    )
}