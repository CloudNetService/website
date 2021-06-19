import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Icon from '@material-ui/core/Icon';

const features = [
    {
        title: 'Free & OpenSource',
        icon: 'code',
        description: (
            <>
                CloudNet is open source and free to use, and this will not change!
                You can find all our projects in our <a href="https://github.com/CloudNetService/" target="_blank">GitHub organisation</a>
            </>
        ),
    },
    {
        title: 'Support',
        icon: 'people',
        description: (
            <>
                If you have any questions regarding CloudNet, you are welcome to join our <a href="https://discord.cloudnetservice.eu" target="_blank">Discord Server</a>.
                You are able to get private support in a ticket or ask our big community there.
            </>
        ),
    },
    {
        title: 'Scalable',
        icon: 'trending_up',
        description: (
            <>
                CloudNet is horizontally and vertically scalable. This means you can distribute your players across different
                virtual or dedicated servers to balance the performance.
            </>
        ),
    },
];

function Feature({icon, title, description}) {
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
                <Icon style={{ fontSize: '4rem' }}>{icon}</Icon>
            </div>
            <h3 className="text--center">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`CloudNET - The Cloud Network Environment Technology`}
            description="A modern application that can dynamically and easily deploy Minecraft oriented software.">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <div className="row">
                      <div className={clsx('col', 'col--8', styles.heroText)}>
                        <h1 className="hero__title">CloudNet&shy;Service</h1>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                          <Link
                            className={clsx(
                              'button button--outline button--secondary button--lg',
                              styles.getStarted,
                            )}
                            to={useBaseUrl('docs/3.3/')}>
                            Get Started
                          </Link>
                        </div>
                      </div>
                      <div className={clsx('col', 'col--4', styles.heroImage)}>
                        <img alt="CloudNetService Logo" src="/img/logo.svg"/>
                      </div>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
