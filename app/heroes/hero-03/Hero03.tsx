"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero03.module.css";

export default function Hero03() {
    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const scanlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // Dramatic entrance
        gsap.set([navRef.current, titleRef.current, subtitleRef.current, ctaRef.current], { autoAlpha: 0 });

        tl.from(containerRef.current, { scale: 1.1, duration: 2, ease: "power2.out" })
            .to(navRef.current, { autoAlpha: 1, y: 0, duration: 1 }, "-=1.5")
            .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8")
            .to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.6")
            .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4");

        // Scanline animation
        gsap.to(scanlineRef.current, {
            y: "100vh",
            duration: 3,
            repeat: -1,
            ease: "none",
        });

        // Mouse parallax
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;

            const bgEl = containerRef.current?.querySelector(`.${styles.bgImage}`);
            if (bgEl) {
                gsap.to(bgEl, {
                    x: x * 0.5,
                    y: y * 0.5,
                    duration: 1.5,
                    ease: "power2.out",
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className={styles.hero}>
            {/* Background */}
            <div className={styles.bgContainer}>
                <Image
                    src="/screed_bg.png"
                    alt="Screed Productions"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.vignette}></div>
                <div ref={scanlineRef} className={styles.scanline}></div>
            </div>

            {/* Nav */}
            <nav ref={navRef} className={styles.nav}>
                <div className={styles.navLeft}>
                    <span className={styles.brand}>SCREED</span>
                </div>
                <div className={styles.navRight}>
                    <a href="#">Films</a>
                    <a href="#">About</a>
                    <a href="#" className={styles.navCta}>Contact</a>
                </div>
            </nav>

            {/* Content */}
            <div className={styles.content}>
                <h1 ref={titleRef} className={styles.title}>
                    <span className={styles.titleLine}>SCREED</span>
                    <span className={styles.titleSub}>PRODUCTIONS</span>
                </h1>
                <p ref={subtitleRef} className={styles.subtitle}>
                    Cinematic storytelling that transcends reality.
                </p>
                <div ref={ctaRef} className={styles.cta}>
                    <button className={styles.primaryBtn}>
                        <span className={styles.btnGlow}></span>
                        View Our Work
                    </button>
                    <button className={styles.secondaryBtn}>
                        Behind the Scenes
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.cornerTL}></div>
            <div className={styles.cornerBR}></div>
            <div className={styles.gridOverlay}></div>
        </section>
    );
}
