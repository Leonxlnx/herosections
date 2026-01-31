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
    const orbsRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Orbs floating
        const orbs = orbsRef.current?.querySelectorAll(`.${styles.orb}`);
        orbs?.forEach((orb, i) => {
            gsap.to(orb, {
                y: `random(-30, 30)`,
                x: `random(-20, 20)`,
                rotation: `random(-15, 15)`,
                duration: 4 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.3,
            });
        });

        // Animated lines
        const lines = linesRef.current?.querySelectorAll(`.${styles.line}`);
        lines?.forEach((line, i) => {
            gsap.fromTo(
                line,
                { scaleX: 0, opacity: 0 },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.5 + i * 0.2,
                    ease: "expo.out",
                }
            );
            gsap.to(line, {
                x: `random(-10, 10)`,
                duration: 5 + i,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1 + i * 0.2,
            });
        });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            containerRef.current,
            { scale: 0.9, opacity: 0, y: 50 },
            { scale: 1, opacity: 1, y: 0, duration: 1.4, delay: 0.1 }
        )
            .fromTo(
                badgeRef.current,
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.9 },
                "-=0.9"
            )
            .fromTo(
                titleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.7"
            )
            .fromTo(
                subtitleRef.current,
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                "-=0.7"
            )
            .fromTo(
                ctaRef.current,
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                "-=0.6"
            );
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated gradient orbs */}
            <div ref={orbsRef} className={styles.orbsContainer}>
                <div className={`${styles.orb} ${styles.orb1}`}></div>
                <div className={`${styles.orb} ${styles.orb2}`}></div>
                <div className={`${styles.orb} ${styles.orb3}`}></div>
                <div className={`${styles.orb} ${styles.orb4}`}></div>
                <div className={`${styles.orb} ${styles.orb5}`}></div>
            </div>

            {/* Decorative lines */}
            <div ref={linesRef} className={styles.linesContainer}>
                <div className={`${styles.line} ${styles.line1}`}></div>
                <div className={`${styles.line} ${styles.line2}`}></div>
                <div className={`${styles.line} ${styles.line3}`}></div>
            </div>

            {/* Grid overlay */}
            <div className={styles.gridPattern}></div>

            {/* Noise texture */}
            <div className={styles.noiseTexture}></div>

            {/* Floating UI elements */}
            <div className={styles.floatingElements}>
                <div className={styles.floatingBadge}>
                    <span className={styles.fbDot}></span>
                    React + Next.js
                </div>
                <div className={styles.floatingStats}>
                    <span className={styles.statNumber}>6+</span>
                    <span className={styles.statLabel}>Heroes</span>
                </div>
                <div className={styles.floatingCode}>
                    <code>&lt;Hero /&gt;</code>
                </div>
            </div>

            {/* Main content */}
            <div ref={containerRef} className={styles.heroContainer}>
                {/* Glow effect behind container */}
                <div className={styles.containerGlow}></div>

                <div className={styles.heroContent}>
                    <div ref={badgeRef} className={styles.badge}>
                        <span className={styles.badgePulse}></span>
                        <span className={styles.badgeText}>Open Source</span>
                        <span className={styles.badgeNew}>NEW</span>
                    </div>

                    <h1 ref={titleRef} className={styles.heroTitle}>
                        <span className={styles.titleLine1}>Beautiful hero sections</span>
                        <br />
                        <span className={styles.titleLine2}>ready to ship</span>
                    </h1>

                    <p ref={subtitleRef} className={styles.heroSubtitle}>
                        A curated collection of modern, stunning hero sections.
                        <br />
                        Copy the code, customize, and ship faster.
                    </p>

                    <div ref={ctaRef} className={styles.heroCta}>
                        <a href="#collection" className={styles.ctaPrimary}>
                            <span className={styles.ctaGlow}></span>
                            <span className={styles.ctaText}>Browse Collection</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="https://github.com/Leonxlnx/herosections" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Corner decorations */}
            <div className={styles.cornerDeco1}></div>
            <div className={styles.cornerDeco2}></div>
        </section>
    );
}
