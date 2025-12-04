import React, { useState } from 'react';

import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import CodeExample from './code-example';
import styles from './why-otter.module.css';

import '../../prism-language-otter';
import fibonacciExample from '!!raw-loader!../examples/fibonacci.ot';
import ffiExample from '!!raw-loader!../examples/ffi.ot';
import errorsExample from '!!raw-loader!../examples/errors.ot';

const tabs = [
    { id: 'simple', label: 'Simple', code: fibonacciExample },
    { id: 'rust-ffi', label: 'Rust FFI', code: ffiExample },
    { id: 'type-safe', label: 'Type Safe', code: errorsExample },
];

export default function WhyOtter() {
    const [activeTab, setActiveTab] = useState('simple');
    const [code, setCode] = useState('');

    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

    React.useEffect(() => {
        setCode(activeTabData.code);
    }, [activeTabData.code]);

    return (
        <section className={styles.whyOtter}>
            <div className={styles.container}>
                <Heading as="h2" className={styles.heading}>
                    Why Otter?
                </Heading>
                <div className={styles.contentBox}>
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabs}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className={styles.actions}>
                            <button type="button" className={styles.actionButton}>
                                <span>Open in Playground</span>
                            </button>
                            <button type="button" className={styles.actionButton}>
                                <span className={styles.actionIcon}>▶</span>
                                <span>Run</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.codeContainer}>
                        <div className={styles.codeWrapper}>
                            <CodeExample source={code} />
                            <textarea
                                className={styles.editableCode}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                spellCheck={false}
                            />
                        </div>
                    </div>
                    <div className={styles.cta}>
                        <Link className={`button button--primary button--lg ${styles.getStartedButton}`} to="/docs/tutorial/getting-started">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

