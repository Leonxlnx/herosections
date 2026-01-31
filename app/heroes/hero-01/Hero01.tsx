"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero01.module.css";

export default function Hero01() {
  const navRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        logosRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.background}>
        <div className={styles.bgImage}></div>
      </div>

      {/* Navigation */}
      <nav ref={navRef} className={styles.nav}>
        <span className={styles.logo}>Flowstate</span>

        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Features</a>
          <a href="#" className={styles.navLink}>How It Works</a>
          <a href="#" className={styles.navLink}>Pricing</a>
          <a href="#" className={styles.navLink}>FAQ</a>
        </div>

        <div className={styles.navRight}>
          <a href="#" className={styles.loginLink}>Login</a>
          <button className={styles.navCta}>Get Started</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div ref={badgeRef} className={styles.badge}>
          <span>INFRASTRUCTURE FOR NEXT FINANCIAL LAYER</span>
        </div>

        <h1 ref={headlineRef} className={styles.headline}>
          Trust-first infrastructure
          <br />
          for digital finance
        </h1>

        <p ref={subtextRef} className={styles.subtext}>
          Flowstate is the calm operating system for modern teams, helping you
          turn ideas into shipped products without the chaos.
        </p>

        <div ref={ctaRef} className={styles.ctaGroup}>
          <a href="#" className={styles.ctaSecondary}>
            Learn more
          </a>
          <button className={styles.ctaPrimary}>Get Started</button>
        </div>
      </div>

      {/* Trusted By */}
      <div ref={logosRef} className={styles.trustedBy}>
        <span className={styles.trustedLabel}>Trusted by experts at leading companies</span>
        <div className={styles.logos}>
          <span className={styles.companyName}>Google</span>
          <div className={styles.microsoftLogo}>
            <svg viewBox="0 0 23 23" fill="currentColor">
              <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
            </svg>
            <span>Microsoft</span>
          </div>
          <span className={styles.companyName}>stripe</span>
          <span className={styles.companyName}>amazon</span>
        </div>
      </div>
    </section>
  );
}
