"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero03.module.css";

export default function Hero03() {
    const containerRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const decorRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.4 } });

        gsap.set([brandRef.current, headlineRef.current, descRef.current, ctaRef.current], {
            autoAlpha: 0,
            y: 80,
        });

        gsap.set(decorRef.current, { autoAlpha: 0, scale: 0.6, rotation: -20 });
        gsap.set(glowRef.current, { autoAlpha: 0, scale: 0.5 });

        tl.to(glowRef.current, { autoAlpha: 1, scale: 1, duration: 2.5, ease: "power2.out" }, 0)
            .to(decorRef.current, { autoAlpha: 1, scale: 1, rotation: 0, duration: 2 }, 0.2)
            .to(brandRef.current, { autoAlpha: 1, y: 0 }, 0.5)
            .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 1.6 }, 0.7)
            .to(descRef.current, { autoAlpha: 1, y: 0 }, 1.1)
            .to(ctaRef.current, { autoAlpha: 1, y: 0 }, 1.3);

        // Parallax on mouse
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(decorRef.current, {
                x: x * 1.5,
                y: y * 1.5,
                duration: 1.8,
                ease: "power2.out",
            });

            gsap.to(glowRef.current, {
                x: x * 0.8,
                y: y * 0.8,
                duration: 2,
                ease: "power2.out",
            });
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
                    alt="Cinematic Background"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay}></div>
                <div className={styles.noiseOverlay}></div>
            </div>

            {/* Epic Glow */}
            <div ref={glowRef} className={styles.epicGlow}></div>

            {/* Decorative Rings */}
            <div ref={decorRef} className={styles.decorRing}>
                <div className={styles.ringOuter}></div>
                <div className={styles.ringMid}></div>
                <div className={styles.ringInner}></div>
                <div className={styles.ringCore}></div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Brand */}
                <div ref={brandRef} className={styles.brand}>
                    <div className={styles.brandLine}></div>
                    <span className={styles.brandText}>SCREED STUDIOS</span>
                    <div className={styles.brandLine}></div>
                </div>

                {/* Headline */}
                <div ref={headlineRef} className={styles.headline}>
                    <h1 className={styles.headlineMain}>
                        <span className={styles.headlineWord}>Cinematic</span>
                        <span className={styles.headlineWordOutline}>Excellence</span>
                    </h1>
                    <p className={styles.headlineSub}>Film Production & Creative Direction</p>
                </div>

                {/* Description */}
                <p ref={descRef} className={styles.description}>
                    Award-winning films and visual experiences that captivate audiences worldwide.
                </p>

                {/* CTA */}
                <div ref={ctaRef} className={styles.cta}>
                    <button className={styles.primaryBtn}>
                        <span className={styles.btnText}>Explore Our Work</span>
                        <span className={styles.btnArrow}></span>
                    </button>
                    <button className={styles.secondaryBtn}>
                        Contact
                    </button>
                </div>
            </div>

            {/* Corner Elements */}
            <div className={styles.cornerTL}>
                <span>EST. 2008</span>
            </div>
            <div className={styles.cornerTR}>
                <a href="#">Portfolio</a>
                <a href="#">About</a>
            </div>
            <div className={styles.cornerBL}>
                <span>150+ Films</span>
                <span className={styles.divider}></span>
                <span>12 Awards</span>
            </div>
        </section>
    );
}
