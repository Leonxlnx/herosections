"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const shape1Ref = useRef<HTMLDivElement>(null);
    const shape2Ref = useRef<HTMLDivElement>(null);
    const shape3Ref = useRef<HTMLDivElement>(null);
    const shape4Ref = useRef<HTMLDivElement>(null);
    const floatingCard1Ref = useRef<HTMLDivElement>(null);
    const floatingCard2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Floating shapes animation
        gsap.to(shape1Ref.current, {
            y: -25,
            x: 15,
            rotation: 15,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(shape2Ref.current, {
            y: 20,
            x: -20,
            rotation: -10,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5,
        });
        gsap.to(shape3Ref.current, {
            y: -15,
            x: -10,
            rotation: 8,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1,
        });
        gsap.to(shape4Ref.current, {
            y: 18,
            x: 12,
            rotation: -12,
            duration: 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5,
        });

        // Floating cards
        gsap.to(floatingCard1Ref.current, {
            y: -12,
            rotation: 2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(floatingCard2Ref.current, {
            y: 10,
            rotation: -2,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1,
        });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            containerRef.current,
            { scale: 0.94, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 1.3, delay: 0.1 }
        )
            .fromTo(
                [floatingCard1Ref.current, floatingCard2Ref.current],
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, stagger: 0.15 },
                "-=0.8"
            )
            .fromTo(
                badgeRef.current,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.7"
            )
            .fromTo(
                titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                "-=0.6"
            )
            .fromTo(
                subtitleRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            );
    }, []);

    return (
        <section className={styles.hero}>
            {/* Gradient background */}
            <div className={styles.gradientBg}></div>

            {/* Decorative floating shapes */}
            <div className={styles.shapesContainer}>
                <div ref={shape1Ref} className={`${styles.shape} ${styles.shape1}`}>
                    <svg viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0,0,0,0.06)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0.02)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div ref={shape2Ref} className={`${styles.shape} ${styles.shape2}`}>
                    <svg viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" rx="20" fill="url(#grad2)" />
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0,0,0,0.05)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0.01)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div ref={shape3Ref} className={`${styles.shape} ${styles.shape3}`}>
                    <svg viewBox="0 0 100 100" fill="none">
                        <polygon points="50,0 100,100 0,100" fill="url(#grad3)" />
                        <defs>
                            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0,0,0,0.04)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0.01)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div ref={shape4Ref} className={`${styles.shape} ${styles.shape4}`}>
                    <svg viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="50" fill="url(#grad4)" />
                        <defs>
                            <linearGradient id="grad4" x1="100%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0,0,0,0.05)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0.02)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className={styles.gridPattern}></div>

            {/* Floating preview cards */}
            <div ref={floatingCard1Ref} className={`${styles.floatingCard} ${styles.floatingCard1}`}>
                <div className={styles.cardMockup}>
                    <div className={styles.mockupHeader}></div>
                    <div className={styles.mockupLine}></div>
                    <div className={styles.mockupLineShort}></div>
                </div>
            </div>
            <div ref={floatingCard2Ref} className={`${styles.floatingCard} ${styles.floatingCard2}`}>
                <div className={styles.cardMockup}>
                    <div className={styles.mockupHeader}></div>
                    <div className={styles.mockupLine}></div>
                    <div className={styles.mockupLineShort}></div>
                </div>
            </div>

            {/* Main content card */}
            <div ref={containerRef} className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div ref={badgeRef} className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>Open Source</span>
                        <span className={styles.badgeNew}>NEW</span>
                    </div>

                    <h1 ref={titleRef} className={styles.heroTitle}>
                        Beautiful hero sections
                        <br />
                        <span className={styles.titleAccent}>ready to ship</span>
                    </h1>

                    <p ref={subtitleRef} className={styles.heroSubtitle}>
                        A curated collection of modern, stunning hero sections.
                        Copy the code, customize, and ship faster.
                    </p>

                    <div ref={ctaRef} className={styles.heroCta}>
                        <a href="#collection" className={styles.ctaPrimary}>
                            Browse Collection
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="https://github.com/Leonxlnx/herosections" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative dots */}
            <div className={styles.dotsPattern}></div>
        </section>
    );
}
