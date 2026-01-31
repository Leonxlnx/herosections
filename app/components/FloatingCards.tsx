"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./FloatingCards.module.css";

const cards = [
    { id: 1, label: "Minimal", delay: 0 },
    { id: 2, label: "Gradient", delay: -1.5 },
    { id: 3, label: "3D", delay: -3 },
    { id: 4, label: "Animated", delay: -4.5 },
];

export default function FloatingCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Initial fade in
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
        );

        // Floating animation for each card
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.to(card, {
                    y: -15,
                    duration: 3,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.5,
                });
            }
        });
    }, []);

    const handleMouseEnter = (index: number) => {
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.4,
                ease: "expo.out",
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, {
                scale: 1,
                duration: 0.4,
                ease: "expo.out",
            });
        }
    };

    return (
        <div ref={containerRef} className={styles.container}>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    ref={(el) => {
                        cardsRef.current[index] = el;
                    }}
                    className={`${styles.card} ${styles[`card${card.id}`]}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div className={`${styles.cardPreview} ${styles[`preview${card.id}`]}`}></div>
                    <span>{card.label}</span>
                </div>
            ))}
        </div>
    );
}
