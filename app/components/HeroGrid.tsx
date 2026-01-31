"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

const heroes = [
    {
        id: 1,
        name: "Flowstate Fintech",
        description: "Clean fintech SaaS hero with glassmorphism navigation, centered content, and trusted logos.",
        slug: "hero-01",
        status: "ready",
        preview: "/hero1bg.webp",
    },
    {
        id: 2,
        name: "Flocky 3D",
        description: "Ultra-premium dark mode hero with real-time R3F 3D visuals, floating dock navigation, and cinematic typography.",
        slug: "hero-02",
        status: "ready",
        preview: "/hero2bg.png",
    },
    {
        id: 3,
        name: "Hero #3",
        description: "Coming soon — stay tuned for more stunning hero sections.",
        slug: "hero-03",
        status: "coming-soon",
        preview: null,
    },
    {
        id: 4,
        name: "Hero #4",
        description: "Coming soon — stay tuned for more stunning hero sections.",
        slug: "hero-04",
        status: "coming-soon",
        preview: null,
    },
];

export default function HeroGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "expo.out",
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section ref={sectionRef} id="collection" className={styles.collection}>
            <div ref={headerRef} className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>The Collection</h2>
                <p className={styles.sectionSubtitle}>
                    Click to explore and copy the code
                </p>
            </div>

            <div className={styles.bentoGrid}>
                {heroes.map((hero, index) =>
                    hero.status === "ready" ? (
                        <Link
                            key={hero.id}
                            href={`/${hero.slug}`}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className={`${styles.bentoCard} ${styles.ready}`}
                        >
                            <div className={styles.cardPreview}>
                                {hero.preview && (
                                    <Image
                                        src={hero.preview}
                                        alt={hero.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                                <div className={styles.previewOverlay}>
                                    <span className={styles.viewLabel}>
                                        View Hero
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardMeta}>
                                    <span className={styles.cardTag}>Ready</span>
                                    <span className={styles.cardNumber}>#{hero.id.toString().padStart(2, '0')}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{hero.name}</h3>
                                <p className={styles.cardDescription}>{hero.description}</p>
                            </div>
                        </Link>
                    ) : (
                        <div
                            key={hero.id}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className={styles.bentoCard}
                        >
                            <div className={styles.cardPreview}>
                                <div className={styles.comingSoonPreview}>
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardMeta}>
                                    <span className={styles.cardTagSoon}>Soon</span>
                                    <span className={styles.cardNumber}>#{hero.id.toString().padStart(2, '0')}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{hero.name}</h3>
                                <p className={styles.cardDescription}>{hero.description}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
