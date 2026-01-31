"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero02.module.css";

export default function Hero02() {
    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
    const visualColRef = useRef<HTMLDivElement>(null);
    const contentColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial States
        gsap.set(navRef.current, { y: -20, opacity: 0 });
        gsap.set(contentColRef.current, { opacity: 1 }); // container visible
        gsap.set(titleLinesRef.current, { y: 100, rotateX: -10, opacity: 0 });
        gsap.set(visualColRef.current, { x: 40, opacity: 0, scale: 0.95 });

        // Animation Sequence
        tl.to(navRef.current, { y: 0, opacity: 1, duration: 1 })
            .to(
                titleLinesRef.current,
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                },
                "-=0.6"
            )
            .to(
                visualColRef.current,
                { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" },
                "-=1"
            );

        // Mouse Interaction
        const handleMouseMove = (e: MouseEvent) => {
            if (!visualColRef.current) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 30;
            const y = (clientY / window.innerHeight - 0.5) * 30;

            gsap.to(visualColRef.current, {
                rotationY: x * 0.5,
                rotationX: -y * 0.5,
                x: x * 0.5,
                y: y * 0.5,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const addToTitleRef = (el: HTMLSpanElement | null) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className={styles.hero}>
            {/* Background Texture */}
            <div className={styles.bgTexture}>
                <Image
                    src="/hero2bg.png"
                    alt="Texture"
                    fill
                    className={styles.bgImage}
                />
                <div className={styles.vignette}></div>
            </div>

            {/* Nav - Clean Top Bar */}
            <nav ref={navRef} className={styles.nav}>
                <div className={styles.navLeft}>
                    <span className={styles.brand}>Flocky</span>
                </div>
                <div className={styles.navRight}>
                    <a href="#">Work</a>
                    <a href="#">Studio</a>
                    <a href="#" className={styles.navCta}>Start</a>
                </div>
            </nav>

            {/* Main Grid */}
            <div className={styles.grid}>
                {/* Left: Content */}
                <div ref={contentColRef} className={styles.contentCol}>
                    <h1 className={styles.title}>
                        <span className={styles.lineMask}>
                            <span ref={addToTitleRef}>Crafting</span>
                        </span>
                        <span className={styles.lineMask}>
                            <span ref={addToTitleRef}>Digital</span>
                        </span>
                        <span className={styles.lineMask}>
                            <span ref={addToTitleRef} className={styles.highlight}>Reality</span>
                        </span>
                    </h1>

                    <p className={styles.description}>
                        We build digital experiences that feel tangible, precise, and infinitely scalable.
                    </p>

                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>
                            Explore Work
                        </button>
                        <button className={styles.secondaryBtn}>
                            Our Process
                        </button>
                    </div>
                </div>

                {/* Right: Visual */}
                <div ref={visualColRef} className={styles.visualCol}>
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>◆</div>
                            <span className={styles.cardLabel}>Flocky/UI</span>
                        </div>

                        <div className={styles.cardBody}>
                            <div className={styles.statRow}>
                                <span>Precision</span>
                                <span className={styles.statVal}>100%</span>
                            </div>
                            <div className={styles.statBar}>
                                <div className={styles.statFill}></div>
                            </div>

                            <div className={styles.cardMessage}>
                                "The impossible is just an unoptimized render."
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <div className={styles.avatarGroup}>
                                <div className={styles.avatar}></div>
                                <div className={styles.avatar}></div>
                                <div className={styles.avatar}></div>
                            </div>
                            <span className={styles.footerText}>+4k Designers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
