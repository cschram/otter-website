import React from 'react';
import Heading from '@theme/Heading';

import CodeExample from '../components/code-example';
import styles from './homepage-features.module.css';

import '../../prism-language-otter';
import fibonacciExample from '!!raw-loader!../examples/fibonacci.ot';
import ffiExample from '!!raw-loader!../examples/ffi.ot';
import errorsExample from '!!raw-loader!../examples/errors.ot';

export default function HomepageFeatures() {
    return (
        <main className={styles.features}>
            <div className={styles.featureSection}>
                <div className={styles.textColumn}>
                    <p className={styles.label}>Our Principle</p>
                    <Heading as="h2" className={styles.mainHeading}>
                        Simple syntax
                    </Heading>
                    <p className={styles.description}>
                        Otter uses a clean and simple syntax, inspired by Python.
                    </p>
                    <p className={styles.description}>
                        Designed to avoid unnecessary complexity so you can focus on building.
                    </p>
                    <p className={styles.description}>
                        A language that feels <span className={styles.highlight}>just like Python</span>.
                    </p>
                </div>
                <div className={styles.codeColumn}>
                    <CodeExample source={fibonacciExample} />
                </div>
            </div>
            <div className={styles.featureSection}>
                <div className={styles.textColumn}>
                    <p className={styles.label}>Our Principle</p>
                    <Heading as="h2" className={styles.mainHeading}>
                        Compiled and statically typed
                    </Heading>
                    <p className={styles.description}>
                        Otter is compiled and statically typed, providing performance and safety.
                    </p>
                    <p className={styles.description}>
                        Designed to avoid unnecessary complexity so you can focus on building.
                    </p>
                    <p className={styles.description}>
                        A language that feels <span className={styles.highlight}>just like TypeScript</span>.
                    </p>
                </div>
                <div className={styles.codeColumn}>
                    <CodeExample source={errorsExample} />
                </div>
            </div>
            <div className={styles.rustFfiSection}>
                <div className={styles.rustFfiContent}>
                    <div className={styles.introLabel}>
                        <span className={styles.labelLine}></span>
                        <span className={styles.labelText}>Introducing our most powerful feature yet</span>
                        <span className={styles.labelLine}></span>
                    </div>
                    <Heading as="h2" className={styles.rustFfiHeading}>
                        Transparent Rust FFI
                    </Heading>
                    <p className={styles.rustFfiDescription}>
                        Otter can integrate with Rust libraries directly from your code <strong>without any annotations</strong>, without any configuration and CLI running.
                    </p>
                    <p className={styles.rustFfiDescription}>
                        Allowing you to turn your actual code from <strong>any library</strong> like serde_json, tokio and every Rust library into your own API.
                    </p>
                    <div className={styles.rustFfiCode}>
                        <CodeExample source={ffiExample} />
                    </div>
                </div>
            </div>
        </main>
    );
}