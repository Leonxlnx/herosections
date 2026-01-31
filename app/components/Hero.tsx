"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // Smooth staggered entrance
        tl.fromTo(
            badgeRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 1.1, delay: 0.3 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2 },
                "-=0.8"
            )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 35 },
                { opacity: 1, y: 0, duration: 1.1 },
                "-=0.85"
            )
            .fromTo(
                ctaRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.8"
            );
    }, []);

    return (
        <section className={styles.hero}>
            {/* Clean background */}
            <div className={styles.bgGradient}></div>

            {/* Floating assets */}
            <div className={styles.assetsContainer}>
                <div className={`${styles.asset} ${styles.asset1}`}></div>
                <div className={`${styles.asset} ${styles.asset2}`}></div>
                <div className={`${styles.asset} ${styles.asset3}`}></div>
                <div className={`${styles.asset} ${styles.asset4}`}></div>
                <div className={`${styles.asset} ${styles.asset5}`}></div>
            </div>

            {/* Subtle grid */}
            <div className={styles.gridPattern}></div>

            {/* Content - no card */}
            <div ref={contentRef} className={styles.heroContent}>
                <div ref={badgeRef} className={styles.badge}>
                    <span className={styles.badgeIcon}>◆</span>
                    <span>Open Source</span>
                </div>

                <h1 ref={titleRef} className={styles.heroTitle}>
                    Beautiful hero sections
                    <br />
                    <span className={styles.titleAccent}>ready to ship</span>
                </h1>

                <p ref={subtitleRef} className={styles.heroSubtitle}>
                    A curated collection of modern, stunning hero sections.
                    <br />
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
