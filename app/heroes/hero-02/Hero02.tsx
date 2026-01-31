"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero02.module.css";

export default function Hero02() {
    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const visualsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial State Set
        gsap.set(navRef.current, { y: -20, opacity: 0 });
        gsap.set(visualsRef.current, { scale: 0.95, opacity: 0 });

        tl.to(navRef.current, { y: 0, opacity: 1, duration: 1, ease: "expo.out" })
            .fromTo(
                titleRef.current?.querySelectorAll(".word"),
                { y: 100, rotateX: -20, opacity: 0 },
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "expo.out",
                },
                "-=0.6"
            )
            .to(
                visualsRef.current,
                { scale: 1, opacity: 1, duration: 1.4, ease: "expo.out" },
                "-=1"
            )
            .fromTo(
                ctaRef.current?.children || [],
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                "-=0.8"
            )
            .fromTo(
                statsRef.current?.children || [],
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6"
            );

        // Subtle parallax for visuals
        const handleMouseMove = (e: MouseEvent) => {
            if (!visualsRef.current) return;
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(visualsRef.current, {
                x: xPos,
                y: yPos,
                duration: 1.5,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className={styles.hero}>
            {/* Floating Capsule Nav */}
            <nav ref={navRef} className={styles.navCapsule}>
                <div className={styles.navLogo}>Flocky</div>
                <div className={styles.navLinks}>
                    <a href="#">Work</a>
                    <a href="#">Studio</a>
                    <a href="#">Cart</a>
                </div>
                <a href="#" className={styles.navMenuBtn}>
                    <div className={styles.menuDot}></div>
                    <div className={styles.menuDot}></div>
                </a>
            </nav>

            <div className={styles.contentWrapper}>
                {/* Left: Typography & Action */}
                <div className={styles.leftColumn}>
                    <h1 ref={titleRef} className={styles.title}>
                        <div className={styles.line}>
                            <span className="word">Design</span>
                            <span className="word">with</span>
                        </div>
                        <div className={styles.line}>
                            <span className="word">absolute</span>
                        </div>
                        <div className={styles.line}>
                            <span className="word" style={{ color: "rgba(255,255,255,0.5)" }}>
                                precision.
                            </span>
                        </div>
                    </h1>

                    <div ref={ctaRef} className={styles.ctaGroup}>
                        <a href="#" className={styles.primaryBtn}>
                            <span className={styles.btnText}>Start Project</span>
                            <span className={styles.btnIcon}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </a>
                        <div className={styles.divider}></div>
                        <a href="#" className={styles.secondaryBtn}>
                            Showcase (24)
                        </a>
                    </div>

                    <div ref={statsRef} className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNum}>01</span>
                            <span className={styles.statLabel}>Concept</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNum}>02</span>
                            <span className={styles.statLabel}>Build</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNum}>03</span>
                            <span className={styles.statLabel}>Ship</span>
                        </div>
                    </div>
                </div>

                {/* Right: Visual Focus */}
                <div ref={visualsRef} className={styles.rightColumn}>
                    <div className={styles.imageMask}>
                        <Image
                            src="/hero2bg.png"
                            alt="Flocky Abstract"
                            fill
                            priority
                            className={styles.bgImage}
                            style={{ objectFit: "cover" }}
                        />
                        <div className={styles.noiseOverlay}></div>
                        <div className={styles.glassCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardDot}></div>
                                <div className={styles.cardDot}></div>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardLine} style={{ width: "60%" }}></div>
                                <div className={styles.cardLine} style={{ width: "80%" }}></div>
                                <div className={styles.cardLine} style={{ width: "40%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
