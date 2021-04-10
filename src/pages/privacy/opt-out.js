import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../styles.module.css';

function Home() {
  window.addEventListener('load', function (e) {
    toggleDisplay();
  });
  function toggleDisplay(e) {
    let exclusionState = window.localStorage.plausible_ignore === "true"
    if (exclusionState) {
      document.getElementById("plausible_button").innerHTML = 'Deaktiviere Tracking'
      console.log('before yes-deactiv')
      document.getElementById('plausible_yes').classList.remove('hidden')
      document.getElementById('plausible_no').classList.add('hidden')
    } else {
      document.getElementById("plausible_button").innerHTML = 'Aktiviere Tracking'
      console.log('before yes-activ')
      document.getElementById('plausible_yes').classList.add('hidden')
      document.getElementById('plausible_no').classList.remove('hidden')
    }
  }
  function toggleExclusion(e) {
    let exclusionState = window.localStorage.plausible_ignore === "true"
    if (exclusionState) {
      delete window.localStorage.plausible_ignore
    } else {
      window.localStorage.plausible_ignore = "true"
    }
    toggleDisplay();
  }
  return (
    <Layout
      title={`Plausible Opt-Out`}>
      <main className={clsx('container', styles.legalText, styles.plausibleOptOut)}>
        <h1>Plausible Opt-Out</h1>
        <p>Auf dieser Seite können Sie das anonymisierte Tracking durch den von uns gehosteten Dienst <a href="https://plausible.io" target="_blank">Plausible</a> abschalten.</p>
        <p>Beachten Sie, dass Sie diese Opt-Out-Prozedur erneut durchführen müssen, wenn Sie das Endgerät oder den Webbrowser wechseln.</p>
        <p>Das liegt daran, dass wir Sie mit Plausible grundsätzlich nicht über verschiedene Browser oder Geräte hinweg verfolgen können.</p>
        <p>Das Tracking ist zurzeit <span id="plausible_yes" className={clsx(styles.plausibleYes)}>aktiviert</span><span id="plausible_no" className={clsx('hidden', styles.plausibleNo)}>deaktiviert</span>.</p>
        <a id="plausible_button" className={clsx('button button--outline button--secondary button--lg', styles.plausibleOptOutButton)} onClick={toggleExclusion}>Loading...</a>
      </main>
    </Layout>

  );
}

export default Home;