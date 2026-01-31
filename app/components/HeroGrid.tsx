"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

// Placeholder heroes for the "coming soon" state
const placeholderHeroes = [
    { id: 1, name: "Hero #1" },
    { id: 2, name: "Hero #2" },
    { id: 3, name: "Hero #3" },
    { id: 4, name: "Hero #4" },
    { id: 5, name: "Hero #5" },
    { id: 6, name: "Hero #6" },
];

export default function HeroGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const emptyStateRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Header animation
        gsap.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
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

        // Empty state animation
        gsap.fromTo(
            emptyStateRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: emptyStateRef.current,
                    start: "top 85%",
                },
            }
        );

        // Cards stagger animation
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "expo.out",
                        delay: index * 0.1,
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
                y: enter ? -8 : 0,
                duration: 0.4,
                ease: "expo.out",
            });
        }
    };

    return (
        <section ref={sectionRef} id="collection" className={styles.collection}>
            <div ref={headerRef} className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>The Collection</h2>
                <p className={styles.sectionSubtitle}>
                    Click on any hero to explore in full detail
                </p>
            </div>

            <div ref={emptyStateRef} className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M12 6v6l4 2" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
                <h3>Heroes Coming Soon</h3>
                <p>
                    We&apos;re crafting beautiful hero sections. Check back soon or star
                    the repo to get notified!
                </p>
                <a
                    href="https://github.com"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Star on GitHub</span>
                </a>
            </div>

            <div className={styles.previewGrid}>
                {placeholderHeroes.map((hero, index) => (
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
                            <span className={styles.previewTag}>Coming Soon</span>
                            <h4>{hero.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
