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
    const orb1Ref = useRef<HTMLDivElement>(null);
    const orb2Ref = useRef<HTMLDivElement>(null);
    const orb3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // Orbs floating animation
        gsap.to(orb1Ref.current, {
            y: -20,
            x: 10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(orb2Ref.current, {
            y: 15,
            x: -15,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1,
        });
        gsap.to(orb3Ref.current, {
            y: -10,
            x: -10,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2,
        });

        tl.fromTo(
            containerRef.current,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, delay: 0.15 }
        )
            .fromTo(
                badgeRef.current,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.8"
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
            {/* Animated gradient orbs */}
            <div className={styles.orbContainer}>
                <div ref={orb1Ref} className={`${styles.orb} ${styles.orb1}`}></div>
                <div ref={orb2Ref} className={`${styles.orb} ${styles.orb2}`}></div>
                <div ref={orb3Ref} className={`${styles.orb} ${styles.orb3}`}></div>
            </div>

            {/* Grid pattern */}
            <div className={styles.gridPattern}></div>

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
