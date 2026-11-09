import { Page } from "../components/Page";
import { STUDIO } from "../lib/motion";
import styles from "./Legal.module.css";

export function Datenschutz() {
  return (
    <Page title="Datenschutz" description={`Datenschutzerklärung von ${STUDIO}.`}>
      <section className={`section narrow ${styles.legal}`}>
        <h1>Datenschutz</h1>
        <p>
          <strong>Verantwortlich:</strong> Ulli Pichler, Sombartstraße 10d, 4040 Linz, Österreich,{" "}
          <a href="mailto:ulli.pichler04@gmail.com">ulli.pichler04@gmail.com</a>
        </p>

        <h2>Diese Website</h2>
        <p>
          Die Website kommt ohne Cookies, Tracking und externe Schriften aus. Sie liegt bei GitHub Pages. Beim Aufruf
          verarbeitet GitHub technisch nötige Daten wie die IP-Adresse. Details stehen in den{" "}
          <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">
            Datenschutzhinweisen von GitHub
          </a>
          .
        </p>

        <h2>Mindestabhebung</h2>
        <p>
          <strong>Was das Spiel selbst speichert:</strong> Spielstände, Einstellungen und auf Android den Kaufstatus und
          den Zähler für Werbung. Alles bleibt auf deinem Gerät und wird von uns nicht übertragen.
        </p>
        <p>
          <strong>Steam (PC):</strong> Bei der Steam-Version verarbeitet Valve Daten zu Konto, Spielzeit und Erfolgen nach
          eigenen Bedingungen.
        </p>
        <p>
          <strong>Android, Werbung:</strong> Die kostenlose Android-Version zeigt über Google AdMob Werbung. Dabei kann
          Google Daten wie Werbe-ID, ungefähren Standort aus der IP-Adresse, Geräteinformationen und Nutzungsdaten
          verarbeiten. In der EU, im EWR, in Großbritannien und der Schweiz fragen wir vor der ersten Werbung nach deiner
          Einwilligung. Du kannst sie jederzeit in den Einstellungen unter „Werbe-Einwilligung ändern“ ändern.
          Rechtsgrundlage ist deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO. Mit dem Kauf „Werbung weg“ werden keine
          Werbedaten mehr angefordert.
        </p>
        <p>
          <strong>Android, Käufe:</strong> Käufe laufen über Google Play. Zahlungsdaten erhalten wir nicht. Das Spiel fragt
          nur ab, ob der Kauf besteht.
        </p>
        <p>
          <strong>Empfänger und Drittländer:</strong> Google kann Daten auch außerhalb der EU verarbeiten. Details stehen
          in den{" "}
          <a href="https://policies.google.com/privacy" rel="noopener">
            Datenschutzhinweisen von Google
          </a>
          .
        </p>
        <p>
          <strong>Kinder:</strong> Das Spiel richtet sich nicht an Kinder.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf der Einwilligung.
          Beschwerden gehen an die österreichische Datenschutzbehörde (dsb.gv.at).
        </p>
        <p>
          <strong>Stand:</strong> November 2026
        </p>
      </section>
    </Page>
  );
}
