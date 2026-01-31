"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero02.module.css";

export default function Hero02() {
    const navRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            navRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.2 },
                "-=0.6"
            )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.8"
            )
            .fromTo(
                ctaRef.current?.children || [],
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1 },
                "-=0.7"
            );
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Image */}
            <div className={styles.bgImage}>
                <Image
                    src="/hero2bg.png"
                    alt="Dark abstract background"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
                <div className={styles.bgOverlay}></div>
            </div>

            {/* Navigation */}
            <nav ref={navRef} className={styles.nav}>
                <div className={styles.navInner}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>◇</span>
                        <span className={styles.logoText}>Nexus</span>
                    </div>
                    <div className={styles.navLinks}>
                        <a href="#" className={styles.navLink}>Features</a>
                        <a href="#" className={styles.navLink}>Pricing</a>
                        <a href="#" className={styles.navLink}>About</a>
                    </div>
                    <a href="#" className={styles.navCta}>Get Started</a>
                </div>
            </nav>

            {/* Content */}
            <div ref={contentRef} className={styles.content}>
                <h1 ref={titleRef} className={styles.title}>
                    Build the future
                    <br />
                    <span className={styles.titleAccent}>with precision</span>
                </h1>

                <p ref={subtitleRef} className={styles.subtitle}>
                    Next-generation platform for developers who demand excellence.
                    <br />
                    Ship faster, scale effortlessly.
                </p>

                <div ref={ctaRef} className={styles.cta}>
                    <a href="#" className={styles.ctaPrimary}>
                        Start Building
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#" className={styles.ctaSecondary}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                        </svg>
                        Watch Demo
                    </a>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className={styles.bottomGradient}></div>
        </section>
    );
}
