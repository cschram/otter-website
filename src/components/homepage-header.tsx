import React from 'react';
import Heading from '@theme/Heading';
import styles from './homepage-header.module.css';
import '../../prism-language-otter';
import Link from '@docusaurus/Link';

export default function HomepageHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.heroContent}>
                <Heading as="h1" className={styles.title}>
                    Otterlang
                </Heading>
                <p className={styles.subtitle}>
                    Programming Simplified
                </p>
                <p className={styles.tagline}>
                    Simple, compiled, and <span className={styles.highlight}>type-safe</span> with seamless <span className={styles.highlight}>Rust</span> interoperability.
                </p>
                <div className={styles.ctaContainer}>
                    <Link className={`button button--primary button--lg ${styles['getting-started-button']}`} to="/docs/tutorial/getting-started">
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    );
}