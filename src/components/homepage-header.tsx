import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import CodeExample from '../components/code-example';
import helloExample from '!!raw-loader!../examples/hello.ot';
import '../../prism-language-otter';

export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary')}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <Heading as="h1" className="hero__title">
                            {siteConfig.title}
                        </Heading>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                        <div>
                            <Link
                                className="button button--lg"
                                to="/docs/tutorial/getting-started">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="col col--6">
                        <CodeExample source={helloExample} />
                    </div>
                </div>
            </div>
        </header>
    );
}