"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import styles from "./Hero02.module.css";
// import * as THREE from 'three'; // Not strictly needed unless using THREE directly

function AbstractShape() {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 2;
        meshRef.current.rotation.y = Math.sin(t / 4) / 2;
        meshRef.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
        meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
                color="#e0e0e0"
                roughness={0.1}
                metalness={0.9}
                emissive="#111"
                emissiveIntensity={0.1}
            />
        </mesh>
    );
}

export default function Hero02() {
    const containerRef = useRef<HTMLElement>(null);
    const title1Ref = useRef<HTMLSpanElement>(null);
    const title2Ref = useRef<HTMLSpanElement>(null);
    const title3Ref = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Title Stagger
        tl.fromTo(
            [title1Ref.current, title2Ref.current, title3Ref.current],
            { y: 150, rotateX: -30, opacity: 0 },
            { y: 0, rotateX: 0, opacity: 1, duration: 1.8, stagger: 0.15 }
        )
            .fromTo(
                navRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=1.2"
            );
    }, []);

    return (
        <section ref={containerRef} className={styles.hero}>
            <div className={styles.grid}></div>
            <div className={styles.vignette}></div>

            {/* Main Layout */}
            <div className={styles.content}>
                {/* Left: Typography */}
                <div className={styles.left}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>Flocky 2.0</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.line}>
                            <span ref={title1Ref} className={styles.word}>Pure</span>
                        </span>
                        <span className={styles.line}>
                            <span ref={title2Ref} className={styles.word}>Digital</span>
                        </span>
                        <span className={styles.line}>
                            <span ref={title3Ref} className={styles.word} style={{ color: "#888" }}>
                                Form.
                            </span>
                        </span>
                    </h1>

                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryBtn}>
                            Start Creating
                            <div className={styles.btnFlash}></div>
                        </button>
                        <button className={styles.secondaryBtn}>
                            Explore
                        </button>
                    </div>
                </div>

                {/* Right: 3D Scene */}
                <div className={styles.right}>
                    <div className={styles.canvasContainer}>
                        <Suspense fallback={null}>
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <Environment preset="city" />
                                <Float
                                    speed={2}
                                    rotationIntensity={0.5}
                                    floatIntensity={0.5}
                                >
                                    <AbstractShape />
                                </Float>
                                <ContactShadows
                                    position={[0, -2, 0]}
                                    opacity={0.5}
                                    scale={10}
                                    blur={2.5}
                                    far={4}
                                />
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>

            {/* Bottom Floating Nav */}
            <nav ref={navRef} className={styles.navDocker}>
                <a href="#" className={`${styles.navItem} ${styles.active}`}>
                    <span className={styles.navIcon}>⊞</span>
                    <span className={styles.navText}>Home</span>
                </a>
                <a href="#" className={styles.navItem}>
                    <span className={styles.navIcon}>⊕</span>
                    <span className={styles.navText}>Work</span>
                </a>
                <a href="#" className={styles.navItem}>
                    <span className={styles.navIcon}>⊙</span>
                    <span className={styles.navText}>About</span>
                </a>
                <div className={styles.navSeparator}></div>
                <a href="#" className={styles.navCta}>Get Flocky</a>
            </nav>
        </section>
    );
}
