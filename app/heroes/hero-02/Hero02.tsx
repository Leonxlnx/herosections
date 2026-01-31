"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero02.module.css";

export default function Hero02() {
    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Reset initial states
        gsap.set(navRef.current, { y: -20, opacity: 0 });
        gsap.set(titleLinesRef.current, { y: 120, rotateX: -20, opacity: 0 });
        gsap.set(cardRef.current, { y: 40, opacity: 0, scale: 0.95 });
        gsap.set(visualRef.current, { scale: 1.1, opacity: 0 });

        // Animation Sequence
        tl.to(visualRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" })
            .to(navRef.current, { y: 0, opacity: 1, duration: 1 }, "-=1.2")
            .to(
                titleLinesRef.current,
                {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                },
                "-=0.8"
            )
            .to(
                cardRef.current,
                { y: 0, opacity: 1, scale: 1, duration: 1 },
                "-=0.6"
            );

        // Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(visualRef.current, {
                x: x * 0.5,
                y: y * 0.5,
                duration: 2,
                ease: "power2.out",
            });

            gsap.to(cardRef.current, {
                x: x * 0.2,
                y: y * 0.2,
                rotateY: x * 0.5,
                rotateX: -y * 0.5,
                duration: 1.5,
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
            {/* Cinematic Background with Mask */}
            <div className={styles.bgContainer}>
                <div ref={visualRef} className={styles.bgImageWrapper}>
                    <Image
                        src="/hero2bg.png"
                        alt="Flocky Background"
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                    />
                    <div className={styles.vignette}></div>
                </div>
            </div>

            {/* Elegant Floating Nav */}
            <nav ref={navRef} className={styles.navBar}>
                <div className={styles.navLogo}>Flocky</div>
                <div className={styles.navItems}>
                    <a href="#">Work</a>
                    <a href="#">Agency</a>
                    <a href="#">Contact</a>
                </div>
                <a href="#" className={styles.navBtn}>Let's Talk</a>
            </nav>

            {/* Main Content */}
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    <span className={styles.lineWrapper}>
                        <span ref={addToTitleRef} className={styles.line}>Crafting</span>
                    </span>
                    <span className={styles.lineWrapper}>
                        <span ref={addToTitleRef} className={styles.line}>Digital</span>
                    </span>
                    <span className={styles.lineWrapper}>
                        <span ref={addToTitleRef} className={styles.line} style={{ color: "rgba(255,255,255,0.5)" }}>Reality.</span>
                    </span>
                </h1>

                {/* Premium Glass Card */}
                <div ref={cardRef} className={styles.glassCard}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardTag}>New System</span>
                            <span className={styles.cardDate}>2026</span>
                        </div>
                        <h3 className={styles.cardTitle}>Fluid & Precise</h3>
                        <p className={styles.cardText}>
                            Experienced digital perfection with our new design methodology.
                        </p>
                        <div className={styles.cardFooter}>
                            <a href="#" className={styles.cardLink}>
                                Explore System <span className={styles.arrow}>→</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cardShine}></div>
                </div>
            </div>
        </section>
    );
}
