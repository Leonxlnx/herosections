"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import FloatingCards from "./FloatingCards";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            badgeRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=0.8"
            )
            .fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.9"
            )
            .fromTo(
                ctaRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.8"
            );
    }, []);

    return (
        <section className={styles.hero}>
            <div ref={contentRef} className={styles.heroContent}>
                <div ref={badgeRef} className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    <span>Open Source Collection</span>
                </div>

                <h1 ref={titleRef} className={styles.heroTitle}>
                    Beautiful <span className="gradient-text">Hero Sections</span>
                    <br />
                    Ready to Use
                </h1>

                <p ref={subtitleRef} className={styles.heroSubtitle}>
                    A growing collection of stunning, modern hero sections. Copy,
                    customize, and ship faster.
                </p>

                <div ref={ctaRef} className={styles.heroCta}>
                    <a href="#collection" className="btn btn-primary">
                        <span>Browse Collection</span>
                        <svg
                            className={styles.btnIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>

                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>0</span>
                            <span className={styles.statLabel}>Heroes</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>∞</span>
                            <span className={styles.statLabel}>Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>

            <FloatingCards />
        </section>
    );
}
