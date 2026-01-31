"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "./HeroGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

// Hero sections data
const heroes = [
    {
        id: 1,
        name: "Flowstate Fintech",
        slug: "hero-01",
        status: "ready",
    },
    {
        id: 2,
        name: "Hero #2",
        slug: "hero-02",
        status: "coming-soon",
    },
    {
        id: 3,
        name: "Hero #3",
        slug: "hero-03",
        status: "coming-soon",
    },
    {
        id: 4,
        name: "Hero #4",
        slug: "hero-04",
        status: "coming-soon",
    },
    {
        id: 5,
        name: "Hero #5",
        slug: "hero-05",
        status: "coming-soon",
    },
    {
        id: 6,
        name: "Hero #6",
        slug: "hero-06",
        status: "coming-soon",
    },
];

export default function HeroGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            }
        );

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "expo.out",
                        delay: index * 0.08,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        },
                    }
                );
            }
        });
    }, []);

    const handleCardHover = (index: number, enter: boolean) => {
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, {
                y: enter ? -4 : 0,
                duration: 0.3,
                ease: "expo.out",
            });
        }
    };

    return (
        <section ref={sectionRef} id="collection" className={styles.collection}>
            <div ref={headerRef} className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Collection</h2>
                <p className={styles.sectionSubtitle}>
                    Click on any hero to explore
                </p>
            </div>

            <div className={styles.previewGrid}>
                {heroes.map((hero, index) =>
                    hero.status === "ready" ? (
                        <Link
                            key={hero.id}
                            href={`/${hero.slug}`}
                            className={`${styles.previewCard} ${styles.ready}`}
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardHover(index, false)}
                        >
                            <div className={styles.previewImage}></div>
                            <div className={styles.previewInfo}>
                                <h4>{hero.name}</h4>
                                <span className={`${styles.previewTag} ${styles.tagReady}`}>
                                    View
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div
                            key={hero.id}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className={styles.previewCard}
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardHover(index, false)}
                        >
                            <div className={styles.previewImage}></div>
                            <div className={styles.previewInfo}>
                                <h4>{hero.name}</h4>
                                <span className={styles.previewTag}>Soon</span>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
