import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/homepage-header';
import HomepageFeatures from '../components/homepage-features';
import '../../prism-language-otter';

// import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`Otter Programming Language`}
      description="The Otter programming language.">
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
