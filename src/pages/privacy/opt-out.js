import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../styles.module.css';
import Head from "@docusaurus/Head";

function Home() {
  function toggleExclusion_pass() {
    window.toggleExclusion();
  }
  return (
    < Layout
      title={`Plausible Opt-Out`}>
      <Head>
        <script src="/privacy/opt-out.js"></script>
      </Head>
      <main className={clsx('container', styles.legalText, styles.plausibleOptOut)}>
        <h1>Plausible Opt-Out</h1>
        <p>Auf dieser Seite können Sie das anonymisierte Tracking durch den von uns gehosteten Dienst <a href="https://plausible.io" target="_blank">Plausible</a> abschalten.</p>
        <p>Beachten Sie, dass Sie diese Opt-Out-Prozedur erneut durchführen müssen, wenn Sie das Endgerät oder den Webbrowser wechseln.</p>
        <p>Das liegt daran, dass wir Sie mit Plausible grundsätzlich nicht über verschiedene Browser oder Geräte hinweg verfolgen können.</p>
        <p>Das Tracking ist zurzeit <span id="plausible_active" className={clsx(styles.plausibleYes)}>aktiviert</span><span id="plausible_inactive" className={clsx('hidden', styles.plausibleNo)}>deaktiviert</span>.</p>
        <a id="plausible_button" className={clsx('button button--outline button--secondary button--lg', styles.plausibleOptOutButton)} onClick={toggleExclusion_pass}>Loading...</a>
      </main>
    </Layout>

  );
}

export default Home;