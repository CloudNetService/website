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
                You can find all our project in our <a href="https://github.com/CloudNetService/" target="_blank">GitHub organisation</a>
            </>
        ),
    },
    {
        title: 'Support',
        icon: 'people',
        description: (
            <>
                When you have any question regarding CloudNet, you are welcome to join our <a href="https://discord.cloudnetservice.eu" target="_blank">Discord Server</a>.
                You can get there either private support in a ticket or ask our big community.
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
            title={``}
            description="CloudNET - The Cloud Network Environment Technology">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
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