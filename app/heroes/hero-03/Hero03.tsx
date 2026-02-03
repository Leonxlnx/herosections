"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero03.module.css";

export default function Hero03() {
    const containerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const filmStripRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set([logoRef.current, titleRef.current, taglineRef.current, ctaRef.current], {
            autoAlpha: 0,
            y: 30,
        });

        tl.to(logoRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 0.3)
            .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 0.5)
            .to(taglineRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.8)
            .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 1);

        // Film strip animation
        gsap.to(filmStripRef.current, {
            x: "-50%",
            duration: 30,
            repeat: -1,
            ease: "none",
        });
    }, []);

    return (
        <section ref={containerRef} className={styles.hero}>
            {/* Background */}
            <div className={styles.bgContainer}>
                <Image
                    src="/screed_bg.png"
                    alt="Cinematic Background"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            {/* Film Strip Decoration */}
            <div className={styles.filmStripContainer}>
                <div ref={filmStripRef} className={styles.filmStrip}>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={styles.filmFrame}>
                            <div className={styles.framePerforation}></div>
                            <div className={styles.frameContent}></div>
                            <div className={styles.framePerforation}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Logo / Brand */}
                <div ref={logoRef} className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                            <circle cx="24" cy="24" r="8" fill="currentColor" />
                            <path d="M24 2V10M24 38V46M2 24H10M38 24H46" stroke="currentColor" strokeWidth="2" />
                            <path d="M8.5 8.5L14 14M34 34L39.5 39.5M8.5 39.5L14 34M34 14L39.5 8.5" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <span className={styles.logoText}>SCREED</span>
                </div>

                {/* Title */}
                <h1 ref={titleRef} className={styles.title}>
                    <span className={styles.titleMain}>FILM PRODUCTIONS</span>
                    <span className={styles.titleAccent}>& CREATIVE AGENCY</span>
                </h1>

                {/* Tagline */}
                <p ref={taglineRef} className={styles.tagline}>
                    Award-winning cinematic storytelling. From concept to screen.
                </p>

                {/* CTA */}
                <div ref={ctaRef} className={styles.cta}>
                    <button className={styles.primaryBtn}>
                        View Our Films
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </button>
                    <button className={styles.secondaryBtn}>
                        Contact Us
                    </button>
                </div>

                {/* Stats / Credentials */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>150+</span>
                        <span className={styles.statLabel}>Films Produced</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>12</span>
                        <span className={styles.statLabel}>Awards Won</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>2008</span>
                        <span className={styles.statLabel}>Established</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                <a href="#">Portfolio</a>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#" className={styles.navCta}>Get in Touch</a>
            </nav>
        </section>
    );
}
