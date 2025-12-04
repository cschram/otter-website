import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './homepage-header.module.css';
import '../../prism-language-otter';
import Link from '@docusaurus/Link';

export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.header}>
            <Heading as="h1" className="text--center">
                {siteConfig.title}
            </Heading>
            <p className={`text--center ${styles.tagline}`}>{siteConfig.tagline}</p>
            <Link className={`button button--primary button--lg ${styles['getting-started-button']}`} to="/docs/tutorial/getting-started">
                Get Started
            </Link>
        </header>
    );
}