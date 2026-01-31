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

        tl.fromTo(
            badgeRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
        )
            .fromTo(
                titleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.7"
            )
            .fromTo(
                ctaRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );
    }, []);

    return (
        <section className={styles.hero}>
            <div ref={contentRef} className={styles.heroContent}>
                <div ref={badgeRef} className={styles.badge}>
                    <span>Open Source</span>
                </div>

                <h1 ref={titleRef} className={styles.heroTitle}>
                    Beautiful hero sections
                    <br />
                    ready to ship
                </h1>

                <p ref={subtitleRef} className={styles.heroSubtitle}>
                    A growing collection of stunning, modern hero sections.
                    <br />
                    Copy, customize, and ship faster.
                </p>

                <div ref={ctaRef} className={styles.heroCta}>
                    <a href="#collection" className="btn btn-primary">
                        Browse Collection
                    </a>
                </div>
            </div>
        </section>
    );
}
