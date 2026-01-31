"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const assetsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Assets floating animation
        const assets = assetsRef.current?.querySelectorAll(`.${styles.asset}`);
        assets?.forEach((asset, i) => {
            gsap.to(asset, {
                y: `random(-25, 25)`,
                x: `random(-15, 15)`,
                rotation: `random(-8, 8)`,
                duration: 5 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.4,
            });
        });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // Staggered content entrance
        tl.fromTo(
            badgeRef.current,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2 }
        )
            .fromTo(
                titleRef.current?.querySelectorAll("span") || [],
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.3, stagger: 0.1 },
                "-=0.9"
            )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.1 },
                "-=0.9"
            )
            .fromTo(
                ctaRef.current?.children || [],
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.12 },
                "-=0.8"
            );
    }, []);

    return (
        <section className={styles.hero}>
            {/* Gradient backdrop */}
            <div className={styles.backdrop}></div>

            {/* Animated assets */}
            <div ref={assetsRef} className={styles.assetsContainer}>
                <div className={`${styles.asset} ${styles.asset1}`}>
                    <div className={styles.assetInner}></div>
                </div>
                <div className={`${styles.asset} ${styles.asset2}`}>
                    <div className={styles.assetInner}></div>
                </div>
                <div className={`${styles.asset} ${styles.asset3}`}>
                    <div className={styles.assetInner}></div>
                </div>
                <div className={`${styles.asset} ${styles.asset4}`}>
                    <div className={styles.assetInner}></div>
                </div>
                <div className={`${styles.asset} ${styles.asset5}`}>
                    <div className={styles.assetInner}></div>
                </div>
                <div className={`${styles.asset} ${styles.asset6}`}>
                    <div className={styles.assetInner}></div>
                </div>
            </div>

            {/* Grid pattern */}
            <div className={styles.grid}></div>

            {/* Content */}
            <div className={styles.heroContent}>
                <div ref={badgeRef} className={styles.badge}>
                    <span className={styles.badgeIcon}>◆</span>
                    <span className={styles.badgeText}>Open Source Collection</span>
                </div>

                <h1 ref={titleRef} className={styles.heroTitle}>
                    <span className={styles.titleWord}>Beautiful</span>{" "}
                    <span className={styles.titleWord}>hero</span>{" "}
                    <span className={styles.titleWord}>sections</span>
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
                        <span>Browse Collection</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="https://github.com/Leonxlnx/herosections" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Star on GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
