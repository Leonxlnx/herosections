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

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

        gsap.set([brandRef.current, headlineRef.current, descRef.current, ctaRef.current], {
            autoAlpha: 0,
            y: 60,
        });

        gsap.set(decorRef.current, { autoAlpha: 0, scale: 0.8 });

        tl.to(decorRef.current, { autoAlpha: 1, scale: 1, duration: 1.5 }, 0)
            .to(brandRef.current, { autoAlpha: 1, y: 0 }, 0.3)
            .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 1.4 }, 0.5)
            .to(descRef.current, { autoAlpha: 1, y: 0 }, 0.9)
            .to(ctaRef.current, { autoAlpha: 1, y: 0 }, 1.1);

        // Subtle parallax on mouse
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 15;
            const y = (clientY / window.innerHeight - 0.5) * 15;

            gsap.to(decorRef.current, {
                x: x * 2,
                y: y * 2,
                duration: 1.5,
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

            {/* Decorative Ring */}
            <div ref={decorRef} className={styles.decorRing}>
                <div className={styles.ringOuter}></div>
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
                        <span className={styles.headlineWord}>Excellence</span>
                    </h1>
                    <p className={styles.headlineSub}>Film Production & Creative Direction</p>
                </div>

                {/* Description */}
                <p ref={descRef} className={styles.description}>
                    We craft award-winning films and visual experiences that captivate audiences worldwide. From concept to premiere.
                </p>

                {/* CTA */}
                <div ref={ctaRef} className={styles.cta}>
                    <button className={styles.primaryBtn}>
                        <span className={styles.btnText}>Explore Our Work</span>
                        <span className={styles.btnIcon}>→</span>
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
                <span className={styles.divider}>•</span>
                <span>12 Awards</span>
            </div>
            <div className={styles.cornerBR}>
                <span>Scroll</span>
                <div className={styles.scrollIndicator}></div>
            </div>
        </section>
    );
}
