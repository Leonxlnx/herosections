"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero02.module.css";

export default function Hero02() {
    const heroRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            navRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
        )
            .fromTo(
                badgeRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.8"
            )
            .fromTo(
                titleRef.current?.querySelectorAll("span") || [],
                { opacity: 0, y: 80, rotateX: -15 },
                { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.08 },
                "-=0.7"
            )
            .fromTo(
                descRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.8"
            )
            .fromTo(
                ctaRef.current?.children || [],
                { opacity: 0, y: 25, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12 },
                "-=0.7"
            )
            .fromTo(
                statsRef.current?.children || [],
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
                "-=0.5"
            )
            .fromTo(
                featuresRef.current?.children || [],
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08 },
                "-=0.4"
            );
    }, []);

    return (
        <section ref={heroRef} className={styles.hero}>
            {/* Background */}
            <div className={styles.bgImage}>
                <Image
                    src="/hero2bg.png"
                    alt="Dark abstract background"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
                <div className={styles.bgOverlay}></div>
                <div className={styles.bgGrain}></div>
            </div>

            {/* Floating elements */}
            <div className={styles.floatingOrb1}></div>
            <div className={styles.floatingOrb2}></div>

            {/* Navigation */}
            <nav ref={navRef} className={styles.nav}>
                <div className={styles.logo}>
                    <div className={styles.logoShape}></div>
                    <span>Nexus</span>
                </div>
                <div className={styles.navLinks}>
                    <a href="#">Product</a>
                    <a href="#">Solutions</a>
                    <a href="#">Developers</a>
                    <a href="#">Pricing</a>
                </div>
                <div className={styles.navRight}>
                    <a href="#" className={styles.navLogin}>Log in</a>
                    <a href="#" className={styles.navCta}>Start Free →</a>
                </div>
            </nav>

            {/* Main Content - Left Aligned */}
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div ref={badgeRef} className={styles.badge}>
                        <span className={styles.badgePulse}></span>
                        Now in Public Beta
                    </div>

                    <h1 ref={titleRef} className={styles.title}>
                        <span>Ship</span>
                        <span>products</span>
                        <span>10x</span>
                        <span>faster</span>
                    </h1>

                    <p ref={descRef} className={styles.description}>
                        The modern development platform that scales with your ambition.
                        From prototype to production in minutes, not months.
                    </p>

                    <div ref={ctaRef} className={styles.cta}>
                        <a href="#" className={styles.ctaPrimary}>
                            Get Started Free
                        </a>
                        <a href="#" className={styles.ctaSecondary}>
                            <span className={styles.playIcon}>▶</span>
                            Watch 2min Demo
                        </a>
                    </div>

                    <div ref={statsRef} className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>50K+</span>
                            <span className={styles.statLabel}>Developers</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>99.9%</span>
                            <span className={styles.statLabel}>Uptime</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>2M+</span>
                            <span className={styles.statLabel}>Deploys</span>
                        </div>
                    </div>
                </div>

                <div className={styles.contentRight}>
                    <div ref={featuresRef} className={styles.featureCards}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <span>Instant Deploy</span>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔒</div>
                            <span>Enterprise Security</span>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🌍</div>
                            <span>Global CDN</span>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <span>Real-time Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
