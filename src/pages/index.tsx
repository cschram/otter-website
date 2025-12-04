import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/homepage-header';
import HomepageFeatures from '../components/homepage-features';
import WhyOtter from '../components/why-otter';
import styles from './index.module.css';
import '../../prism-language-otter';

// import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`Otter Programming Language`}
      description="The Otter programming language."
      noFooter>
      <div className={styles.homepage}>
        <HomepageHeader />
        <HomepageFeatures />
        <WhyOtter />
      </div>
    </Layout>
  );
}
