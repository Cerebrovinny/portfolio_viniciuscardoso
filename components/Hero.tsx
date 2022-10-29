import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";

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
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7ABBA" />
            </h1>
        </div>
    );
}