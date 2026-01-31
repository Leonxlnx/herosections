import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Made with passion ·{" "}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
            </p>
        </footer>
    );
}
