import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Icon from '@material-ui/core/Icon';
import Translate from '@docusaurus/Translate';

const features = [
    {
        title: (
            <Translate
                id="homepage.feature.openSource.title">
                Free & OpenSource
            </Translate>
        ),
        icon: 'code',
        description: (
            <Translate
                id="homepage.feature.openSource.description"
                values={{githubLink: <a href="https://github.com/CloudNetService/" target="_blank"><Translate
                    id="homepage.feature.openSource.githubLinkName">
                    GitHub organisation
                    </Translate></a>}}>
                {
                  "CloudNet is open source and free to use, and this will not change! You can find all our projects in our {githubLink}."
                }
            </Translate>
        ),
    },
    {
        title: (
          <Translate
            id="homepage.feature.support.title">
            Support
          </Translate>),
        icon: 'people',
        description: (
            <Translate
                id="homepage.feature.support.description"
                values={{discordLink: <a href="https://discord.cloudnetservice.eu" target="_blank"><Translate
                    id="homepage.feature.support.discordLinkName">
                    Discord Server
                  </Translate></a>}}>
                {
                  "If you have any questions regarding CloudNet, you are welcome to join our {discordLink}. If you have any questions regarding CloudNet, you are welcome to join our"
                }
            </Translate>
        ),
    },
    {
        title: (
            <Translate id="homepage.feature.scalable.title">
                Scalable
            </Translate>
        ),
        icon: 'trending_up',
        description: (
            <Translate
              id="homepage.feature.scalable.description">
              CloudNet is horizontally and vertically scalable. This means you can distribute your players across different virtual or dedicated servers to balance the performance.
            </Translate>
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
                            <Translate
                                id="homepage.getStartedButton">
                                Get Started
                            </Translate>
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