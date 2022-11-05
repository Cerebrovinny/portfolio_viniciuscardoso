import React from 'react';
import { motion } from "framer-motion";

type Props = {};

export default function WorkExperience({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
                src="https://avatars.githubusercontent.com/u/52631834?s=400&u=b243c4a839472b74215c7595d15e9a8b15f894ef&v=4"
                alt=""
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Software Engineer</h4>
                <p className="font-bold text-2xl mt-1">Company Name</p>
                <div className="flex space-x-2 my-2">
                    <img className="h-10 w-10 rounded-full"
                         src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                         alt=""
                    />
                    <img className="h-10 w-10 rounded-full"
                         src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                         alt=""
                    />
                    <img className="h-10 w-10 rounded-full"
                         src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                         alt=""
                    />
                {/*    Tech used*/}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started at... ended ...
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Worked on...</li>
                    <li>Worked on...</li>
                    <li>Worked on...</li>
                </ul>
            </div>
        </article>
    )
}