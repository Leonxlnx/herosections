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

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            containerRef.current,
            { scale: 0.98, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, delay: 0.1 }
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
            {/* Background gradient */}
            <div className={styles.bgGradient}></div>

            <div ref={containerRef} className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div ref={badgeRef} className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>Open Source</span>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
