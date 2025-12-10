"use client";
import { useEffect, useState } from "react";
import { useMemo } from "react";

export default function Typewriter() {
    const words = useMemo(() => ["استخدام", "پیشرفت", "آینده", "شبکه سازی"], []);

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const current = words[wordIndex];
        const typingSpeed = isDeleting ? 60 : 120;

        const handler = setTimeout(() => {
            if (isDeleting) {
                setText(current.substring(0, text.length - 1));

                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((i) => (i + 1) % words.length);
                }

            } else {
                setText(current.substring(0, text.length + 1));

                if (text.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 800);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(handler);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            با ما خیالت از {text} راحته
        </span>
    );
}
