"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
    stars?: number;
}

export default function Header({ stars = 0 }: HeaderProps) {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.1 }
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
                    href="https://github.com/Leonxlnx/herosections"
                    className={styles.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className={styles.starCount}>
                        <svg className={styles.starIcon} viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                        </svg>
                        {stars}
                    </span>
                </a>
            </nav>
        </header>
    );
}
