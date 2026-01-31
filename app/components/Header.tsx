"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
            );
        }
    }, []);

    return (
        <header ref={headerRef} className={styles.header}>
            <Link href="/" className={styles.logo}>
                <span className={styles.logoIcon}>◆</span>
                <span className={styles.logoText}>HeroSections</span>
            </Link>
            <nav className={styles.nav}>
                <Link href="#collection" className={styles.navLink}>
                    Collection
                </Link>
                <a
                    href="https://github.com"
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </nav>
        </header>
    );
}
